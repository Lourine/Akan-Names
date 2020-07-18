function getAkanName(CC, YY, MM, DD) {
  return (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
}
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var namesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var namesFemale = ["Akosua", "Adowa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
var mygender = document.getElementsByName("gender");
var myBirthday =document.getElementById("birthday").value;
var dayOfTheWeek = getAkanName();
if(genders[0].checked == true){
    var mygender = "male";
  }
  else if(mygender[1].checked == true){
    var gender = "female";
  }