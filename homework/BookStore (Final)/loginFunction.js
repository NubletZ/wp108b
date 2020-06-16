var userFlag = false;
var passFlag = false;

var userArr = [], emailArr = [], addressArr = [], passArr = [];

if(localStorage.getItem("username") != null) userArr = localStorage.getItem("username").split(',');
else userArr.push(-1);

if(localStorage.getItem("email") != null) emailArr = localStorage.getItem("email").split(',');
else emailArr.push(-1);

if(localStorage.getItem("address") != null) addressArr = localStorage.getItem("address").split(',');
else addressArr.push(-1);

if(localStorage.getItem("pass") != null) passArr = localStorage.getItem("pass").split(',');
else passArr.push(-1);

function loginCheck(){
    var x = document.getElementById("loginForm");
    var userfill = x.elements[0].value;
    var passfill = x.elements[1].value;

    userFlag = false;
    passFlag = false;

    userArr.push(mainUser.username);
    emailArr.push(mainUser.email);
    addressArr.push(mainUser.address);
    passArr.push(mainUser.password);
    
    for(i = 0; i < userArr.length; i++){
        if(userfill == userArr[i]){
            userFlag = true;
            if(passfill == passArr[i]){
                passFlag = true;
                localStorage.setItem("currentUser", userfill);
                localStorage.setItem("currentAddress", addressArr[i]);
                localStorage.setItem("currentEmail", emailArr[i]);
                break;
            }
            else{
                alert("wrong password");
                break;
            }
        }
        else if(userfill == admin.username){
            userFlag = true;
            if(passfill == admin.password){
                passFlag = true;
                localStorage.setItem("currentUser", admin.username);
                localStorage.setItem("currentAddress", admin.address);
                localStorage.setItem("currentEmail", admin.email);
                break;
            }
            else{
                alert("wrong password");
                break;
            }
        }
    }

    if(!userFlag) alert("there's no such username");

    if(userFlag && passFlag) location.href = "home.html";
}