function onSuccess(stream){
  const video = document.getElementById('webcam');
  if(window.URL){
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
  video.autoplay = true;
}

if (navigator.getUserMedia){
  navigator.getUserMedia({video: true}, onSuccess);
} else {
  document.getElementById('webcam').src = 'small.mp4';
}
