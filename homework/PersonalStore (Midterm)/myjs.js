function startData(){
    localStorage.setItem('FruSo', 0);
    localStorage.setItem('LoDo', 0);
    localStorage.setItem('CriVe', 0);
    localStorage.setItem('BuCa', 0);
    localStorage.setItem('AnVe', 0);
    localStorage.setItem('CuPe', 0);
    localStorage.setItem('LiBo', 0);
}

// Function to save the data from index.html form
function myFunction(){
    
    var x = document.getElementById("form1");
    var usrname = x.elements[0].value; //store the value of username
    var email = x.elements[1].value; //store the value of email
    var pass = x.elements[2].value; //store the value of password

    //ignore this part, this is just to test if the variable's value is correct or not
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

// Function to show hello alert and nickname in Home.html
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
    document.getElementById("sideMenu").style.height = "100vh";
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
        document.getElementById('productPrice').innerHTML = "35 NT";
    }
    if(page_type == 2){
        document.getElementById('productTitle').innerHTML = "•LOVE DOGGO•";
        document.getElementById('productImg').src = "resource/bp doggo.png";
        document.getElementById('productPrice').innerHTML = "45 NT";
    }
    if(page_type == 3){
        document.getElementById('productTitle').innerHTML = "•CHRISTMAS VECTOR•";
        document.getElementById('productImg').src = "resource/p christmas.png";
        document.getElementById('productPrice').innerHTML = "35 NT";
    }
    if(page_type == 4){
        document.getElementById('productTitle').innerHTML = "•BUNNY CARROT•";
        document.getElementById('productImg').src = "resource/bp bunny.png";
        document.getElementById('productPrice').innerHTML = "50 NT";
    }
    if(page_type == 5){
        document.getElementById('productTitle').innerHTML = "•ANIMAL VECTOR•";
        document.getElementById('productImg').src = "resource/p animal.png";
        document.getElementById('productPrice').innerHTML = "35 NT";
    }
    if(page_type == 6){
        document.getElementById('productTitle').innerHTML = "•CURIOUS PENGU•";
        document.getElementById('productImg').src = "resource/bp pengu.png";
        document.getElementById('productPrice').innerHTML = "45 NT";
    }
    if(page_type == 7){
        document.getElementById('productTitle').innerHTML = "•LITTLE BOY•";
        document.getElementById('productImg').src = "resource/p mushroomboy.png";
        document.getElementById('productPrice').innerHTML = "40 NT";
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

var p=[];
p[0] = localStorage.getItem('FruSo');
p[1] = localStorage.getItem('LoDo');
p[2] = localStorage.getItem('CriVe');
p[3] = localStorage.getItem('BuCa');
p[4] = localStorage.getItem('AnVe');
p[5] = localStorage.getItem('CuPe');
p[6] = localStorage.getItem('LiBo');

//FOR CART.HTML
function cartFunction(){
    var j = 0;
    for(var i = 0; i < 7; i++){
        if(p[i] != 0){
            newRow(i);
            document.getElementById("xButton"+i).innerHTML = "<a href='javascript:void(0)' onclick='deleteCart("+i+")' class='xButton'>x</a>"
            document.getElementById("pBitmap"+i).innerHTML = tablePicture(i);
            document.getElementById("pName"+i).innerHTML = tableName(i);
            document.getElementById("pPrice"+i).innerHTML = tablePrice(i);
            document.getElementById("pQuantity"+i).innerHTML = p[i];
        }
        else j++;
    }
    if(j == 7){
        document.getElementById('emptyCart').innerHTML = "Still empty, keep exploring ~"
    }
}

function newRow(i){
    document.getElementById('cartTable').insertRow().id="t"+i;
    document.getElementById("t"+i).insertCell().id="xButton"+i;
    document.getElementById("t"+i).insertCell().id="pBitmap"+i;
    document.getElementById("t"+i).insertCell().id="pName"+i;
    document.getElementById("t"+i).insertCell().id="pPrice"+i;
    document.getElementById("t"+i).insertCell().id="pQuantity"+i;
}

function deleteCart(i){
    p[i] = 0;
    var row = document.getElementById("t"+i);
    row.parentNode.removeChild(row);
    rewriteData();
    totalFunction()
}

//function to rewrite data after deleting some item from cart
function rewriteData(){
    localStorage.setItem('FruSo',p[0]);
    localStorage.setItem('LoDo',p[1]);
    localStorage.setItem('CriVe',p[2]);
    localStorage.setItem('BuCa',p[3]);
    localStorage.setItem('AnVe',p[4]);
    localStorage.setItem('CuPe',p[5]);
    localStorage.setItem('LiBo',p[6]);
}

function tablePicture(i) {
    if(i == 0) return "<img src='resource/p yinni.png' class='bitPic'>";
    else if(i == 1) return "<img src='resource/bp doggo.png' class='bitPic'>";
    else if(i == 2) return "<img src='resource/p christmas.png' class='bitPic'>";
    else if(i == 3) return "<img src='resource/bp bunny.png' class='bitPic'>";
    else if(i == 4) return "<img src='resource/p animal.png' class='bitPic'>";
    else if(i == 5) return "<img src='resource/bp pengu.png' class='bitPic'>";
    else if(i == 6) return "<img src='resource/p mushroomboy.png' class='bitPic'>";
}

function tableName(i) {
    if(i == 0) return "•Fruit Soup Girl•";
    else if(i == 1) return "•Love Doggo•";
    else if(i == 2) return "•Christmas Vector•";
    else if(i == 3) return "•Bunny Carrot•";
    else if(i == 4) return "•Animal Vector•";
    else if(i == 5) return "•Curious Pengu•";
    else if(i == 6) return "•Little Boy•";
}

function tablePrice(i) {
    if(i == 0 || i == 2 || i == 4) return 35;
    else if(i == 1 || i == 5) return 45;
    else if(i == 3) return 50;
    else if(i == 6) return 40;
}

function totalFunction() {
    var total = 0;
    for(i = 0; i < 7; i++){
        total += tablePrice(i) * p[i];
    }
    document.getElementById('total').innerHTML = "Total : " + total + " NT";
}

//js for setting animation
// function animationMenu(){
//     document.getElementById('sideMenu').className = "fadein";
// }

function checkOut() {
    var j = 0;
    for(i = 0; i < 7; i++){
        if(p[i] != 0) j++;
    }
    if(j != 0){
        startData();
        location.href = "checkOut.html";
    }
    else alert("you don't have any item in your cart")
}