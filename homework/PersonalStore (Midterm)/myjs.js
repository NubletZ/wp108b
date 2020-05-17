// Function to save the data from Index form
function myFunction(){
    
    var x = document.getElementById("form1");
    var usrname = x.elements[0].value; //store the value of username
    var email = x.elements[1].value; //store the value of email
    var pass = x.elements[2].value; //store the value of password
    var message = "";
    // document.getElementById("demo").innerHTML = usrname;
    // document.getElementById("demo2").innerHTML = email;
    // document.getElementById("demo3").innerHTML = pass;
    // document.getElementById("demo3").value.length = getElementById("nickname").value.length;
    if(pass == 123 && x.elements[0].value.length > 0){
        localStorage.setItem('usrname', usrname);
        location.href = 'home.html';
    }
    else if(pass != 123 && x.elements[0].value.length > 0){
        alert("Are you a guest? fill in the password by 123");
        document.getElementById('pass').focus();
    }
    else if(x.elements[0].value.length <= 0 && pass == 123){
        alert("Please fill in your nickname so we know how to call you");
        document.getElementById('nickname1').focus();
    }
    else{
        alert("Please make sure that you've filled in your nickname and password correctly");
        document.getElementById('nickname1').focus();
    } 
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

//FOR PRODUCTDESC.HTML
function loadFunction(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page_type = urlParams.get('myProduct')
    //set title and image
    if(page_type == 1) {
        document.getElementById('productTitle').innerHTML = "•FRUIT SOUP GIRL•";
        document.getElementById('productImg').src = "resource/p yinni.png";
    }
}
