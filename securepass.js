//returns true or false if the length is at least 8 character long
function lengthCheck(password){

  if(password.length >= 8){
    return true
  }
  else{
    return false;
  }

}






//returns true or false if there is an uppercase character in the password
function upperCaseCheck(password){

  for(let i=0; i<password.length; i++){

    if(password.fromCharCode(i) >= 65 && password.fromCharCode(i) <= 90){
      return true;
    }

  }
  return false;
}






//returns true or false if there is an lowercase character in the password
function lowerCaseCheck(password){

  for(let i=0; i<password.length; i++){

    if(password.fromCharCode(i) >= 97 && password.fromCharCode(i) <= 122){
      return true;
    }

  }
  return false;
}



}








//returns true or false if there is a numerical character
function numberCheck(password){

  for(let i=0; i<password.length; i++){

    if(password.fromCharCode(i) >= 48 && password.fromCharCode(i) <= 57){
      return true;
    }

  }
  return false;
}

}







//returns true or false if there is a special character in the password
function specialCheck(check){

  for(let i=0; i<password.length; i++){

    if(password.fromCharCode(i) >= 33 && password.fromCharCode(i) <= 47
    || password.fromCharCode(i) >= 58 && password.fromCharCode(i) <= 64
    || password.fromCharCode(i) >= 91 && password.fromCharCode(i) <= 96
    || password.fromCharCode(i) >= 123 && password.fromCharCode(i) <= 127){
      return true;
    }

  }
  return false;
}










function passedAllChecks(){

}









//returns a string which represents the grade for your password
function grade(password){


}
