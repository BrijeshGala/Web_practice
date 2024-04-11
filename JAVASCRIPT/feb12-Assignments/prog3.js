  var tbl1 = document.getElementById("table1");
  var colors = ["red", "green", "blue", "yellow"];


  function fun() {
    var str = "<tr><td>Index</td><td>Value</td></tr>";

    for (var i = 0; i < colors.length; i++) {
      str += "<br><tr><td>" +  i  + "</td><td>" +  colors[i]  + "</td></tr>";
    }
    tbl1.innerHTML = str;
 }