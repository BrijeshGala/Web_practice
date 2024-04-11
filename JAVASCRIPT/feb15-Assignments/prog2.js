function processString() {
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
var inputStr = document.getElementById("inputBox").value;
var capStr = "";
var reversedStr = "";

// Capitalize 
for (var i = 0; i < inputStr.length; i++) {
if (i === 0 || inputStr[i - 1] === ' ') {
capStr += inputStr[i].toUpperCase();
} else {
  capStr += inputStr[i].toLowerCase();
 }
}

// Reverse the string
for (var j = inputStr.length - 1; j >= 0; j--) {
  reversedStr += inputStr[j];
}

  d1.textContent ="capital:-"+capStr;
  d2.textContent = "reverse:-"+reversedStr;
}
    