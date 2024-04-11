//EXCEPTION HANDLING
// try{
   //code that may cause an error
// }
// catch(error){
   //what to do when an error occurs
// }
// finally{

// }

//ERROR TYPES
// 1)Error
// 2)EvalError
// 3)RangeError
// 4)ReferenceError
// 5)SyntaxError
// 6)TypeError
// 7)URIError

//Syntax of throw error
//:-throw new SyntaxError
//:-throw new RangeError
//:-throw new TypeError

function fun(){
  try{
    arr.sort();
    throw new TypeError("array not defined..<br>");
  }
  catch(e){
    document.write(e);
  }
  finally{
    document.write("<br>Finally executed..");
  }
  document.write("<br>after sort");
}

//if error occur on the html then handle the event .
//window.onerror = function(msg,url,line){
// alert(msge);
//}