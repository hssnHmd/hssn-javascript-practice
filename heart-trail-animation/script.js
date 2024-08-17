const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (e) => {
  const sizeSpan = Math.random() * 100;
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  const spanEl = document.createElement('span');

  spanEl.style.left = xPos + 'px';
  spanEl.style.top = yPos + 'px';
  spanEl.style.width = sizeSpan + 'px';
  spanEl.style.height = sizeSpan + 'px';
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 300);
});
