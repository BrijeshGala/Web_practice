addEventListener("message", getMsg, false);
function getMsg(event){
  var str=event.data;
  postMessage(str+"!!!!");
}