function funCreate(){
  document.cookie="color=red;expires=wed,6 Mar 2024 0:0:0;path=/";
  alert("cookie created!!");
}
function funDelete(){
  document.cookie="color=;expires=wed,5 Mar 2024 0:0:0";
  alert("cookie created!!");
}

function funRead(){
  var str=document.cookie;
  alert(str);
  fruit=mango; color=red; city=pune
}

// Cookies are small text files that are stored on the user's computer and sent back to the server with each request.
// Cookies are limited in size, 4 KB of data & have restrictions on the data that can be stored, such as the requirement to store values as strings.

// Applications of Cookies
// 1)Cookies are often used to store small amounts of data.
// 2)They are also used to track user behaviour.