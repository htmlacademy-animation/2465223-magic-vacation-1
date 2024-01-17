import lettersAnimation from "../utils/lettersAnimation";

export default () => {
  lettersAnimation(`.intro__title`, {animationName: `letters-animation`, delayOffset: 500});
  lettersAnimation(`.slider__item-title`, {animationName: `letters-animation`, delayOffset: 300});
  lettersAnimation(`.prizes__title`, {animationName: `letters-animation`, delayOffset: 500});
  lettersAnimation(`.rules__title`, {animationName: `letters-animation`, delayOffset: 300});
  lettersAnimation(`.game__title`, {animationName: `letters-animation`, delayOffset: 300});
};
