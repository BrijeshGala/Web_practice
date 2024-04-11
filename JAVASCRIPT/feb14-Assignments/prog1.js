function funCase(){ //declares a JavaScript function named funCase().
  var char=document.getElementById("txtChar").value;//retrieves the value of an HTML input element with the ID "txtChar" and assigns it to the variable char.
  if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=123){//checks if the character code of the first character in the string char is within the range of lowercase letters in ASCII (97 to 122).
    var opt=char.charCodeAt(0)-32;//If the character is lowercase, this line calculates the character code of its uppercase equivalent by subtracting 32 from the character code of the lowercase character.
    var uc=String.fromCharCode(opt);//converts the character code opt back to its corresponding character and assigns it to the variable uc, which represents the uppercase character.
    d1.innerHTML="<br>char="+char+"="+uc;//sets the innerHTML property of an HTML element with the ID "d1" to display the original character char and its uppercase equivalent uc.
  }
  else if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=91){//If the character is not lowercase, this line checks if it's within the range of uppercase letters in ASCII (65 to 90).
    var opt=char.charCodeAt(0)+32;//If the character is uppercase, this line calculates the character code of its lowercase equivalent by adding 32 to the character code of the uppercase character.
    var lc=String.fromCharCode(opt);//converts the character code opt back to its corresponding character and assigns it to the variable lc, which represents the lowercase character.
    d1.innerHTML="<br>char="+char+"="+lc;//sets the innerHTML property of an HTML element with the ID "d1" to display the original character char and its lowercase equivalent lc.
  }
}