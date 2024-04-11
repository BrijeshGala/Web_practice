document.write("<br>navigator");
document.write("<br>platform:"+navigator.platform);
document.write("<br>appName:"+navigator.appName);
document.write("<br>language:"+navigator.language);
document.write("<br>userAgent:"+navigator.userAgent);
var arr=navigator.plugins;
for(i=0;i<arr.length;i++){
  document.write("<br>Name="+arr[i].name.toUpperCase());
}
