function getAkanName(){
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var namesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var namesFemale = ["Akosua", "Adowa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
  var mygender = document.getElementById("gender");
  var myBirthdate =document.getElementById("birthDate");
  var dateOfBirth=new Date(myBirthdate);
  var dayOfWeek = dateOfBirth.getDay();
  if (mygender[0].checked == true) {
    switch (dayOfWeek) {
      case 0:
        document.getElementById("result").innerHTML=`You were born on ${day[0]} and Your akan name is ${namesMale[0]}!`;
        break;
      case 1:
        document.getElementById("result").innerHTML=`You were born on ${day[1]} and Your akan name is ${namesMale[1]}!`;
        break;
      case 2:
        document.getElementById("result").innerHTML=`You were born on ${day[2]} and Your akan name is ${namesMale[2]}!`;
        break;
      case 3:
        document.getElementById("result").innerHTML=`You were born on ${day[3]} and Your akan name is ${namesMale[3]}!`;
        break;
      case 4:
        document.getElementById("result").innerHTML=`You were born on ${day[4]} and Your akan name is ${namesMale[4]}!`;
        break;
      case 5:
        document.getElementById("result").innerHTML=`You were born on ${day[5]} and Your akan name is ${namesMale[5]}!`;
        break;
      case 6:
        document.getElementById("result").innerHTML=`You were born on ${day[6]} and Your akan name is ${namesMale[6]}!`;
    }}
    else {
       switch (dayOfTheWeek) {
      case 0:
        document.getElementById("result").innerHTML=`You were born on ${day[0]} and Your akan name is ${namesFemale[0]}!`;
        break;
      case 1:
        document.getElementById("result").innerHTML=`You were born on ${day[1]} and Your akan name is ${namesFemale[1]}!`;
        break;
      case 2:
        document.getElementById("result").innerHTML=`You were born on ${day[2]} and Your akan name is ${namesFemale[2]}!`;
        break;
      case 3:
        document.getElementById("result").innerHTML=`You were born on ${day[3]} and Your akan name is ${namesFemale[3]}!`;
        break;
      case 4:
        document.getElementById("result").innerHTML=`You were born on ${day[4]} and Your akan name is ${namesFemale[4]}!`;
        break;
      case 5:
        document.getElementById("result").innerHTML=`You were born on ${day[5]} and Your akan name is ${namesFemale[5]}!`;
        break;
      case 6:
        document.getElementById("result").innerHTML=`You were born on ${day[6]} and Your akan name is ${namesFemale[6]}!`;
    }
  }
  }
