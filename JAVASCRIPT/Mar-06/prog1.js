function funDelete(){
  // Implement cookie deletion logic here
  alert("Cookie deleted!");
}

function funread(){
  var result = getCookieValue("fruit");
  alert(result);
}

function getCookieValue(cookieName){
  var str = document.cookie;
  var arr = str.split("; ");
  var cookieValue = null;

  for (var i = 0; i < arr.length; i++) {
      var xarr = arr[i].split("=");
      xarr[0] = xarr[0].trim();
      if (xarr[0] == cookieName) {
          cookieValue = xarr[1];
      }
  }

  return cookieValue;
}