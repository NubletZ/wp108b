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