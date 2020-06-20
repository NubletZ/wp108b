// Function to open and close the side menu
function openMenu(){
    document.getElementById("sideMenu").style.width = "100vw";
    document.getElementById("sideMenu").style.height = "100vh";
}

function closeMenu(){
    document.getElementById("sideMenu").style.width = "0vw";
    document.getElementById("sideMenu").style.height = "100vh";
}


//reference : https://stackoverflow.com/questions/18032220/css-change-image-src-on-imghover
//the structure is almost the same, but i change the variable and the filepath as I need
function sideMenu_Hover(id, fileName){
    id.setAttribute('src', 'resource/' + fileName + 'HO.png')
}

function sideMenu_Out(id, fileName){
    id.setAttribute('src', 'resource/' + fileName + '.png')
}

// set order Button display or hidden based on the user
// only admin can access the order
// haven't been used yet
function userLoad(){
    var user = localStorage.getItem("currentUser");
    var email = localStorage.getItem("currentEmail");
    if(user == admin.username){
        document.getElementById("orderButton").style.padding = "12px 8px 12px 8px";
        document.getElementById("orderButton").style.display = "block";
    }
    else {
        document.getElementById("orderButton").style.padding = "0";
        document.getElementById("orderButton").style.display = "none";
    }

    if(user == null) location.href = "index.html"

    document.getElementById("currentUser").innerHTML = user;
    document.getElementById("currentEmail").innerHTML = email;
}

// decrase or increase the product quantity
function productQty(differ){
    var qty = parseInt(document.getElementById("prdQty").value);
    if(differ == 2){
        document.getElementById("prdQty").value = 1 + qty;
    }
    else if (differ == 1 && qty > 1){
        document.getElementById("prdQty").value = qty - 1;
    }
}

// function for cart.html
//FOR CART.HTML
function cartFunction(){
    var j = 0;
    for(var i = 0; i < 4; i++){
        var id = i+1;
        if(localStorage.getItem("orderb"+id) != 0 && localStorage.getItem("orderb"+id) != null){
            newRow(i);
            var bookData = localStorage.getItem("b"+id).split(':');
            document.getElementById("xButton"+i).innerHTML = "<a href='javascript:void(0)' onclick='deleteCart("+i+")' class='xButton'>x</a>"
            document.getElementById("pName"+i).innerHTML = bookData[0];
            document.getElementById("pPrice"+i).innerHTML = bookData[1];
            document.getElementById("pQuantity"+i).innerHTML = localStorage.getItem("orderb"+id);
        }
        else j++;
    }
    if(j == 4){
        document.getElementById('emptyCart').innerHTML = "Still empty, keep exploring ~"
        document.getElementById("buttonCOut").disabled = true;
    }
    totalFunction();
}

function newRow(i){
    document.getElementById('cartTable').insertRow().id="t"+i;
    document.getElementById("t"+i).insertCell().id="xButton"+i;
    document.getElementById("t"+i).insertCell().id="pName"+i;
    document.getElementById("t"+i).insertCell().id="pPrice"+i;
    document.getElementById("t"+i).insertCell().id="pQuantity"+i;
}

// the book stock back to the last stock and the order would be cancelled
function deleteCart(i){
    var id = i+1;
    var lastStock = parseInt(localStorage.getItem("stockb"+id));
    var lastOrder = parseInt(localStorage.getItem("orderb" + id));
    localStorage.setItem("stockb" + id, lastStock + lastOrder);
    localStorage.setItem("orderb"+id, 0);
    var row = document.getElementById("t"+i);
    row.parentNode.removeChild(row);
    totalFunction();
}
var total;
function totalFunction() {
    total = 0;
    for(i = 1; i < 5; i++){
        var price = localStorage.getItem("b" + i).split(':');
        var qty = parseInt(localStorage.getItem("orderb" + i));
        total += price[1] * qty;
    }
    document.getElementById('total').innerHTML = "Total : " + total + " NT";
}

var userId = -2;
// function to check out after shopping
function checkOut(){
    var p=[];
    for(i = 0; i < 4; i++){
        var id = i+1;
        p[i] = localStorage.getItem("orderb" + id);
    }
    var cUser = localStorage.getItem("currentUser");
    for(i = 0; i < userArr.length; i++){
        if(cUser == mainUser.username){
            userId = -1;
            break;
        }
        else if(cUser == userArr[i]){
            userId = i;
            break;
        }
    }
    localStorage.setItem(userId + "userOrder", p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + total);

    for(i = 1; i < 5; i++){
        localStorage.removeItem("orderb" + i);
    }

    location.href = "cart.html";
    alert("Your order has been passed to the seller");
}

// FUNCTION FOR ORDER.HTML
var data, dataUser;
function orderCart(){
    if(localStorage.getItem("-1userOrder") != null){
        dataUser = localStorage.getItem("-1userOrder").split(',');
        newOrderRow("-1");
        innerOrderRow("-1");
    }
    for(i = 0; i < userArr.length; i++){
        if(localStorage.getItem(i+"userOrder") != null){
            data = localStorage.getItem(i+"userOrder").split(',');
            newOrderRow(i);
            innerOrderRow(i);
        }
    }
}

function newOrderRow(i){
    document.getElementById('ocartTable').insertRow().id="tr"+i;
    document.getElementById("tr"+i).insertCell().id="finButton"+i;
    document.getElementById("tr"+i).insertCell().id="oName"+i;
    document.getElementById("tr"+i).insertCell().id="oEmail"+i;
    document.getElementById("tr"+i).insertCell().id="oAddress"+i;
    document.getElementById("tr"+i).insertCell().id="oB1"+i;
    document.getElementById("tr"+i).insertCell().id="oB2"+i;
    document.getElementById("tr"+i).insertCell().id="oB3"+i;
    document.getElementById("tr"+i).insertCell().id="oB4"+i;
    document.getElementById("tr"+i).insertCell().id="oPrice"+i;
}

function innerOrderRow(i){
    document.getElementById("finButton"+i).innerHTML= "<a href='javascript:void(0)' onclick='deleteoCart("+i+")' class='xButton'>SENT</a>"
    if(i == "-1"){
        document.getElementById("oName"+i).innerHTML= mainUser.username;
        document.getElementById("oEmail"+i).innerHTML= mainUser.email;
        document.getElementById("oAddress"+i).innerHTML= mainUser.address;
        document.getElementById("oB1"+i).innerHTML= dataUser[0];
        document.getElementById("oB2"+i).innerHTML= dataUser[1];
        document.getElementById("oB3"+i).innerHTML= dataUser[2];
        document.getElementById("oB4"+i).innerHTML= dataUser[3];
        document.getElementById("oPrice"+i).innerHTML= dataUser[4];
    }
    else{
        document.getElementById("oName"+i).innerHTML= userArr[i];
        document.getElementById("oEmail"+i).innerHTML= emailArr[i];
        document.getElementById("oAddress"+i).innerHTML= addressArr[i];
        document.getElementById("oB1"+i).innerHTML= data[0];
        document.getElementById("oB2"+i).innerHTML= data[1];
        document.getElementById("oB3"+i).innerHTML= data[2];
        document.getElementById("oB4"+i).innerHTML= data[3];
        document.getElementById("oPrice"+i).innerHTML= data[4];
    }
}

function countpendOrder(){
    var table = document.getElementById("ocartTable");
    var rows = table.rows.length - 1;
    document.getElementById("pendOrder").innerHTML = "Total pending item : " + rows;
}

function deleteoCart(i){
    localStorage.removeItem(i + "userOrder");
    var row = document.getElementById("tr"+i);
    row.parentNode.removeChild(row);
    countpendOrder();
}