function convertToUpperCase(str) {
  var upperCaseStr = "";
  for (var i = 0; i < str.length; i++) {              
    if (str[i] >= 'a' && str[i] <= 'z') {      
      upperCaseStr += String.fromCharCode(str.charCodeAt(i) - 32);
    } else {                                      
      upperCaseStr += str[i];
    }
  }
  return upperCaseStr;
}

// Test the function
function displayUpperCase(){
  var str = document.getElementById("txtName").value;
  var uppercaseString = convertToUpperCase(str);
  document.getElementById("result").innerText = "Uppercase: " + uppercaseString;
}