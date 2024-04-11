//CLOSURES
//Closures are nested fn.
//we can write one body fn into another body fn.
//Inner fn can access variables of outer fn & also the parameters of outer fn.
//We need to write the closures to secure the variable. We have only 1 way to secure the variable that is by declaring it inside the fn.

function makeMyName(fname,lname){
  var str="my full name is ";
  function myName(){
    return str+fname+lname;  
  }
  return myName();
}
var output=makeMyName("MS ","Dhoni");
console.log(output);

//write a closure where outer variable value is changed in inner fn.Display old and new value of the variable.

//FUNCTION EXPRESSION
//A variable pointing to the reference of an anonnymus fn.
