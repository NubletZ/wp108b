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
    var qty = document.getElementById("prdQty").value;
    if(differ == 2){
        document.getElementById("prdQty").value = 1 + + qty;
    }
    else if (differ == 1 && qty > 1){
        document.getElementById("prdQty").value = qty - 1;
    }
}