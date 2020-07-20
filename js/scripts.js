

function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "You Didn't Submit a Valid Date!";

    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML = "Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
            
                }
                else {
                    document.getElementById('message').innerHTML = "Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                
                }
                break;
            }    
            else {
                document.getElementById('message').innerHTML = "PLEASE SELECT YOUR GENDER!!";
            }
        }
    }
}

function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}