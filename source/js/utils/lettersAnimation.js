export default function lettersAnimation(nodeSelector, animationOptions) {
  const {delayOffset, animationName} = animationOptions;

  const node = document.querySelector(nodeSelector);

  const text = node.textContent.trim().split(` `);
  node.textContent = ``;
  node.classList.add(animationName);

  const wrapLetters = (word) => {
    const wordContainer = document.createElement(`span`);
    node.append(wordContainer);
    let delay = 0;

    for (const letter of word) {
      delay = Math.random() * delayOffset;
      const span = document.createElement(`span`);
      span.textContent = letter;
      span.style.animationDelay = `${delay}ms`;
      wordContainer.append(span);
    }
  };

  text.forEach(wrapLetters);
}
