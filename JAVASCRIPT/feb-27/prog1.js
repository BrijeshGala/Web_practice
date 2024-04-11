function funOpen(){
  myWin=window.open("","_blank","width=100,height=100");
  myWin.document.write("hello");
  myWin.document.bgColor="yellow";
}
function funClose(){
  myWin.close();
}

//BROWSER OBJECT MODEL(BOM)
// It provides us foll object.
// 1)window
// 2)screen
// 3)location
// 4)history
// 5)navigator

// SET INTERVAL(expression or the function to be executed, time period in millisec)
// functionality will be executed continuously after the elapse of the time period.
// it returns you the reference of the interval set.
// to clear the interval , you have the method CLEAR INTERVAL.

// SET TIMEOUT(expression to be executed,time period in millisec)
// functionality will be executed only once after the elapse of the time period.
// to clear the timeout , you have the method CLEAR TIMEOUT.

//FOCUS METHOD
// It focuses the window.

//BLUR METHOD
//It removes the focus from the window.

