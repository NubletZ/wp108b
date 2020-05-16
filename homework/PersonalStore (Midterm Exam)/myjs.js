// Function to save the data from Index form
function myFunction(){
    
    var x = document.getElementById("form1");
    var usrname = x.elements[0].value; //store the value of username
    var email = x.elements[1].value; //store the value of email
    var pass = x.elements[2].value; //store the value of password
    // document.getElementById("demo").innerHTML = usrname;
    // document.getElementById("demo2").innerHTML = email;
    // document.getElementById("demo3").innerHTML = pass;
    // document.getElementById("demo3").value.length = getElementById("nickname").value.length;
    if(x.elements[0].value.length > 0){
        localStorage.setItem('usrname', usrname);
        location.href = 'home.html';
    }
    else alert('Please fill in the nickname so we know how to call you')
}

// Function to show hello alert in Home
function helloFunction(){
    var hello = localStorage.getItem('usrname');
    alert("Hello " + hello + "! Welcome to my small universe");
}

// Function to open and close the side menu
function openMenu(){
    document.getElementById("sideMenu").style.width = "100vw";
    document.getElementById("sideMenu").style.height = "100vh";
}

function closeMenu(){
    document.getElementById("sideMenu").style.width = "0vw";
    document.getElementById("sideMenu").style.height = "0vh";
}