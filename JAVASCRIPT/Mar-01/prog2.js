var vdo = document.querySelector("video");
var btn = document.querySelector("input[type=button]");
function funPlay(){
  if(vdo.paused){
    vdo.play();
    btn.value="Pause";
  }
  else if(!vdo.paused){
    vdo.pause();
    btn.value="Play";
  }
}
function funEnd(){
  btn.value="Play";
}
function funForward(){
  vdo.currentTime = vdo.currentTime+3
}
function funRewind(){
  vdo.currentTime = vdo.currentTime-3
}