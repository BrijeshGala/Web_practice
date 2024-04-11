let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let buttonsArray = Array.from(buttons); //This line creates a new array called buttonsArray by converting an array-like object buttons into a real array. The Array.from() method is used for this conversion. buttons likely refers to a collection of HTML button elements.
let string = ""; //This line initializes an empty string variable called string. This variable is going to store the current input string.
buttonsArray.forEach(btn => { //This line starts a loop over each element of the buttonsArray using the forEach() method. It takes a callback function with btn as the parameter, which represents each button element in the array.
  btn.addEventListener("click",(e) => { //This line adds a click event listener to each button element. When a button is clicked, the function inside the event listener is executed. e represents the event object.
    if(e.target.innerHTML == "DEL"){ //This line checks if the inner HTML content of the clicked button is equal to "DEL". e.target refers to the element that triggered the event (in this case, the button that was clicked).
      string = string.substring(0, string.length-1); //If the clicked button is "DEL", this line removes the last character from the string variable using the substring() method.
      input.value = string; //This line updates the value of an input element (presumably with the id input) to the current value of the string variable.
    }else if(e.target.innerHTML == "AC"){ //This line checks if the inner HTML content of the clicked button is equal to "AC".

      string = ""; //If the clicked button is "AC", this line sets the string variable to an empty string, effectively clearing the input.
      input.value = string; //This line updates the value of the input element to reflect the cleared string.
    }else if(e.target.innerHTML == "="){ //This line checks if the inner HTML content of the clicked button is equal to "=".
      string = eval(string); //If the clicked button is "=", this line evaluates the current string as a JavaScript expression using the eval() function and stores the result back into the string variable.
      input.value = string; //This line updates the value of the input element to display the result of the evaluated expression.
    }else{
      string += e.target.innerHTML; //This line appends the inner HTML content of the clicked button to the string variable, effectively building the input expression.
      input.value = string; //This line updates the value of the input element to reflect the updated string
    }
    });
});
