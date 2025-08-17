// src/components/CardSwap.js
import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useCallback } from "react";
import gsap from "gsap";
import "./CardSwap.css";

export const Card = forwardRef(
  ({ customClass, ...rest }, ref) => (
    <div ref={ref} {...rest} className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()} />
  )
);
Card.displayName = "Card";

const makeSlot = (i, distX, distY, total) => ({ x: i * distX, y: -i * distY, z: -i * distX * 1.5, zIndex: total - i });
const placeNow = (el, slot, skew) => gsap.set(el, { x: slot.x, y: slot.y, z: slot.z, xPercent: -50, yPercent: -50, skewY: skew, transformOrigin: "center center", zIndex: slot.zIndex, force3D: true });

const CardSwap = ({
  width = 350,
  height = 200,
  cardDistance = 40,
  verticalDistance = 40,
  delay = 5000,
  pauseOnHover = true,
  onCardClick,
  onSwap,
  activeIndex,
  skewAmount = 6,
  children,
}) => {
  const config = { ease: "elastic.out(0.6,0.9)", durMove: 1.5 };
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef()), [childArr]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef(null);
  const container = useRef(null);

  const animateToOrder = useCallback((newOrder, duration) => {
    if (tlRef.current?.isActive()) tlRef.current.kill();
    const tl = gsap.timeline();
    tlRef.current = tl;
    newOrder.forEach((cardIdx, i) => {
      const el = refs[cardIdx].current;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.to(el, { ...slot, duration, ease: config.ease }, 0);
    });
  }, [refs, cardDistance, verticalDistance, config.ease]);

  const swap = useCallback(() => {
    const newOrder = [...order.current];
    const front = newOrder.shift();
    newOrder.push(front);
    order.current = newOrder;
    onSwap?.(newOrder[0]);
  }, [onSwap]);
  
  useEffect(() => {
    if (activeIndex !== undefined && activeIndex !== order.current[0]) {
      const newOrder = [...order.current];
      const currentPos = newOrder.indexOf(activeIndex);
      if (currentPos !== -1) {
        const [item] = newOrder.splice(currentPos, 1);
        newOrder.unshift(item);
        order.current = newOrder;
        animateToOrder(newOrder, config.durMove);
      }
    }
  }, [activeIndex, animateToOrder, config.durMove]);

  useEffect(() => {
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, refs.length), skewAmount));
    
    const startInterval = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(swap, delay);
    };
    startInterval();

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => clearInterval(intervalRef.current);
      const resume = () => startInterval();
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => { node.removeEventListener("mouseenter", pause); node.removeEventListener("mouseleave", resume); clearInterval(intervalRef.current); };
    }
    return () => clearInterval(intervalRef.current);
  }, [refs, cardDistance, verticalDistance, skewAmount, swap, delay, pauseOnHover]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child) ? cloneElement(child, { key: i, ref: refs[i], style: { width, height, ...(child.props.style ?? {}) }, onClick: (e) => { child.props.onClick?.(e); onCardClick?.(i); } }) : child
  );

  return <div ref={container} className="card-swap-container" style={{ width, height }}>{rendered}</div>;
};

export default CardSwap;