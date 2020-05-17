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

    //checking for password and nickname
    if(pass == 123 && x.elements[0].value.length > 0){
        localStorage.setItem('usrname', usrname); //store username to localStorage
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

// Function to show hello alert and nickname in Home
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
    //pass a value using the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page_type = urlParams.get('myProduct')
    //set different title and image according to the URL
    if(page_type == 1) {
        document.getElementById('productTitle').innerHTML = "•FRUIT SOUP GIRL•";
        document.getElementById('productImg').src = "resource/p yinni.png";
    }
    if(page_type == 2){
        document.getElementById('productTitle').innerHTML = "•LOVE DOGGO•";
        document.getElementById('productImg').src = "resource/bp doggo.png";
    }
    if(page_type == 3){
        document.getElementById('productTitle').innerHTML = "•CHRISTMAS VECTOR•";
        document.getElementById('productImg').src = "resource/p christmas.png";
    }
    if(page_type == 4){
        document.getElementById('productTitle').innerHTML = "•BUNNY CARROT•";
        document.getElementById('productImg').src = "resource/bp bunny.png";
    }
    if(page_type == 5){
        document.getElementById('productTitle').innerHTML = "•ANIMAL VECTOR•";
        document.getElementById('productImg').src = "resource/p animal.png";
    }
    if(page_type == 6){
        document.getElementById('productTitle').innerHTML = "•CURIOUS PENGU•";
        document.getElementById('productImg').src = "resource/bp pengu.png";
    }
    if(page_type == 7){
        document.getElementById('productTitle').innerHTML = "•LITTLE BOY•";
        document.getElementById('productImg').src = "resource/p mushroomboy.png";
    }
}

function storeData(){
    document.getElementById('buttonAdd').innerHTML = "Added!"; //change buttonAdd text
    var c = document.getElementById('qty');
    var qty = c.options[c.selectedIndex].text; //store selected value to var qty
    //store qty to local storage depend on which product it belongs to
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page_type = urlParams.get('myProduct')
    if(page_type == 1) localStorage.setItem('FruSo', qty);
    else if(page_type == 2) localStorage.setItem('LoDo', qty);
    else if(page_type == 3) localStorage.setItem('CriVe', qty);
    else if(page_type == 4) localStorage.setItem('BuCa', qty);
    else if(page_type == 5) localStorage.setItem('AnVe', qty);
    else if(page_type == 6) localStorage.setItem('CuPe', qty);
    else if(page_type == 7) localStorage.setItem('LiBo', qty);
    // document.getElementById('demo12').innerHTML = localStorage.getItem('CriVe'); //I used this to test if the local storage receive the correct value
}