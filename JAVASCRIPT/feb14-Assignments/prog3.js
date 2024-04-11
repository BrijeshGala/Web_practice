document.getElementById("output");
function reverseString(){
  let inputText = document.getElementById("inputText").value;
  let reversedStr = "";

  for (let i = inputText.length - 1; i >= 0; i--){
    reversedStr += inputText[i];
  }

  document.getElementById("output").textContent = "Reversed String: " + reversedStr;
}