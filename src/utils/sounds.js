// src/utils/sounds.js
import { Howl } from 'howler';

// Create a sounds folder in your 'public' directory
// and add short mp3 files named hover.mp3 and click.mp3

export const playHoverSound = () => {
  const sound = new Howl({
    src: ['/sounds/hover.mp3'],
    volume: 0.3,
  });
  sound.play();
};

export const playClickSound = () => {
  const sound = new Howl({
    src: ['/sounds/click.mp3'],
    volume: 0.5,
  });
  sound.play();
};