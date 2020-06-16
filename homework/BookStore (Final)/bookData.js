// Data of books and it's price
localStorage.setItem("b1", "Essential Calculus:1000");
localStorage.setItem("b2", "Digital Design:850");
localStorage.setItem("b3", "Foundations of Computer Science:450");
localStorage.setItem("b4", "The Design and Analysis of Algorithms:540");

// Data of the books stock
localStorage.setItem("stockb1", 30);
localStorage.setItem("stockb2", 35);
localStorage.setItem("stockb3", 45);
localStorage.setItem("stockb4", 40);

//function for productphoto.html
function bookStock(id){
    document.getElementById(id).innerHTML = "Stock : " + localStorage.getItem(id);
}

function show_productQty(bookId){
    var dataArr = localStorage.getItem(bookId).split(':');

    // use reference code from https://stackoverflow.com/questions/1088544/get-element-from-within-an-iframe
    var iproductQty = document.getElementById('iproductQty');
    var bookData = iproductQty.contentDocument || iproductQty.contentWindow.document;
    //

    content.document.getElementById("bookTitle").innerHTML = bookData[0];
    content.document.getElementById("bookPrice").innerHTML = bookData[1];
    
    document.getElementById("iproductQty").style.width = "100vw";
}