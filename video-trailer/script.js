const watch = document.querySelector('.watch');
const videoContainer = document.querySelector('.video-container');
const closeBtn = document.querySelector('.closeB');
const videoEl = document.querySelector('video');

closeBtn.addEventListener('click', function () {
  videoContainer.classList.add('active');
});
watch.addEventListener('click', function () {
  videoContainer.classList.remove('active');
  videoEl.pause();
  videoEl.currentTime = 0;
});
