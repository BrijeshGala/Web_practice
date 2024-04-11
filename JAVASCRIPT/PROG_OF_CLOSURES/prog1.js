//write a closure where outer variable value is changed in inner fn.Display old and new value of the variable.

function outer(){
 var myName = "Brijesh Gala"; //Outer Variable

 function inner(){
  var old_name = myName;
  myName = "MS Dhoni"; //Changing the value of the outer variable
  var new_name = myName;
  console.log(`Old name is: ${old_name}, New name is: ${new_name}`);
 }
 inner(); //Call the inner function
}
outer(); //Call the outer function