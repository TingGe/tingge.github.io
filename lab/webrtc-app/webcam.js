const getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
const video = document.getElementById('video');
const capture = document.getElementById('capture');
const img = document.getElementById('img');

// 截屏
const snapCapture = function() {
  const videoWidth = video.videoWidth,
    videoHeight = video.videoHeight;
  if (videoWidth && videoHeight) {
    capture.width = videoWidth;
    capture.height = videoHeight;
    capture.getContext('2d').drawImage(
      video, 0, 0, videoWidth, videoHeight
    );
    img.src = capture.toDataURL('image/png');
  } else {
    setTimeout(snapCapture, 200);
  }
}
video.addEventListener('click', snapCapture, false);

// 调用摄像头
if (getUserMedia) {
  getUserMedia.call(navigator, {
    video: true,
    audio: true
  }, function(stream) {
    video.src = window.URL ? window.URL.createObjectURL(stream) : stream;
  }, function(ex) {
    console.log('Rejected!', ex);
  });
} else {
  video.src = './res/small.mp4';
  console.log('浏览器不支持 getUserMedia， 播放默认视频');
}
