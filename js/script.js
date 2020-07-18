function getAkanName(CC, YY, MM, DD) {
  return (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
}
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var namesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var namesFemale = ["Akosua", "Adowa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
var mygender = document.getElementsByName("gender");
var myBirthday = document.getElementById("birthday").value;
var dayOfTheWeek = parseInt(getAkanName());
if (genders[0].checked == true) {
  var mygender = "male";
  switch (dayOfTheWeek) {
    case 0:
      alert("You were born on " + day[0] + " and Your akan name is " + namesMale[0] + "!");
      break;
    case 1:
      alert("You were born on " + day[1] + " and Your akan name is " + namesMale[1] + "!");
      break;
    case 2:
      alert("You were born on " + day[2] + " and Your akan name is " + namesMale[2] + "!");
      break;
    case 3:
      alert("You were born on " + day[3] + " and Your akan name is " + namesMale[3] + "!");
      break;
    case 4:
      alert("You were born on " + day[4] + " and Your akan name is " + namesMale[4] + "!");
      break;
    case 5:
      alert("You were born on " + day[5] + " and Your akan name is " + namesMale[5] + "!");
      break;
    case 6:
      alert("You were born on " + day[6] + " and Your akan name is " + namesMale[6] + "!");
  }
}
if (mygender[1].checked == true) {
  var mygender = "female";
  switch (dayOfTheWeek) {
    case 0:
      alert("You were born on " + day[0] + " and Your akan name is " + namesFemale[0] + "!");
      break;
    case 1:
      alert("You were born on " + day[1] + " and Your akan name is " + namesFemale[1] + "!");
      break;
    case 2:
      alert("You were born on " + day[2] + " and Your akan name is " + namesFemale[2] + "!");
      break;
    case 3:
      alert("You were born on " + day[3] + " and Your akan name is " + namesFemale[3] + "!");
      break;
    case 4:
      alert("You were born on " + day[4] + " and Your akan name is " + namesFemale[4] + "!");
      break;
    case 5:
      alert("You were born on " + day[5] + " and Your akan name is " + namesFemale[5] + "!");
      break;
    case 6:
      alert("You were born on " + day[6] + " and Your akan name is " + namesFemale[6] + "!");
  }
}