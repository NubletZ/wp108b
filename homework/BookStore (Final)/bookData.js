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


//showing pop up for user to decide the book quantity;
function show_productQty(bookId){
    var bookData = localStorage.getItem(bookId).split(':');
    
    document.getElementById("bookTitle").innerHTML = bookData[0];
    document.getElementById("bookPrice").innerHTML = "Price : " + bookData[1] + " NT ";
    
    document.getElementById("pqtyWrapper").style.display = "block";
}

function close_productQty(){
    document.getElementById("pqtyWrapper").style.display = "none";
}