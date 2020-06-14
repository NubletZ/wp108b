//this javascript used to manage the user data

const mainUser = {
    username: 'user',
    password: 'user',
    address: 'NQU',
    email: "-"
}

const admin = {
    username: 'admin',
    password: 'admin',
    address: '306',
    email: "s110810538@student.nqu.edu.tw"
}

//dataFalse is used to count how many user's datas are wrong
var dataFalse = 0;
var user, address, email, pass, confPass;
function signIn_Click(){
    //insert user data to variable
    dataFalse = 0;
    var x = document.getElementById("logData");
    user = x.elements[0].value;
    address = x.elements[1].value;
    email = x.elements[2].value;
    pass = x.elements[3].value;
    confPass = x.elements[4].value;

    // just for test
    // document.getElementById("test1").innerHTML = "user = " + user;
    // document.getElementById("test2").innerHTML = "address = " + address;
    // document.getElementById("test3").innerHTML = "email = " + email;
    // document.getElementById("test4").innerHTML = "pass = " + pass;

    userCheck(user);
    emailCheck(email);
    passwordCheck();
    if(dataFalse == 0) {
        addData();
    }
}

var lsUsername, lsEmail, lsAddress, lsPass;
var userArr, emailArr, addressArr, passArr;

if(localStorage.getItem("username") != null) lsUsername = localStorage.getItem("username").split(',');
else lsUsername = 0;

if(localStorage.getItem("email") != null) lsEmail = localStorage.getItem("email").split(',');
else lsEmail = 0;

if(localStorage.getItem("address") != null) lsAddress = localStorage.getItem("address").split(',');
else lsAddress = 0;

if(localStorage.getItem("pass") != null) lsPass = localStorage.getItem("pass").split(',');
else lsPass = 0;

function userCheck(user){
    for(i = 0; i < lsUsername.length; i++){
        userArr.push(lsUsername[i]);
    }
    for(i = 0; i < userArr.length; i++){
        if(user == userArr[i]){
            alert("The username has been used by another people");
            dataFalse++;
            break;
        }
        else if(user.length < 1 || address.length < 1){
            dataFalse++;
            break;
        }
    }
}

function emailCheck(email){
    for(i = 0; i < lsEmail.length; i++){
        emailArr.push(lsEmail[i]);
    }
    for(i = 0; i < emailArr.length; i++){
        if(email == emailArr[i]){
            alert("The email has been used by another people");
            dataFalse++;
            break;
        }
        else if(email.length < 1 || password.length < 1){
            dataFalse++;
            break;
        }
    }
}

function passwordCheck(){
    if(pass != confPass){
        alert("your password doesn't match")
        dataFalse++;
    }
}

function addData(){
    // add new data to array
    userArr.push(user);
    emailArr.push(email);

    for(i = 0; i < lsAddress.length; i++){
        addressArr.push(lsAddress[i]);
    }
    addressArr.push(address);

    for(i = 0; i < lsPass.length; i++){
        passArr.push(lsPass[i]);
    }
    passArr.push(pass);

    localStorage.setItem("username", userArr);
    localStorage.setItem("address", addressArr);
    localStorage.setItem("email", emailArr);
    localStorage.setItem("pass", passArr);

    // code for test
    // document.getElementById("test5").innerHTML = localStorage.getItem("username");
    // document.getElementById("test6").innerHTML = localStorage.getItem("address");
    // document.getElementById("test7").innerHTML = localStorage.getItem("email");
    // document.getElementById("test8").innerHTML = localStorage.getItem("pass");
}
