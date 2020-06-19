// Data of books and it's price
if(localStorage.getItem("b1") == null) localStorage.setItem("b1", "Essential Calculus:1000");
if(localStorage.getItem("b2") == null) localStorage.setItem("b2", "Digital Design:850");
if(localStorage.getItem("b3") == null) localStorage.setItem("b3", "Foundations of Computer Science:450");
if(localStorage.getItem("b4") == null) localStorage.setItem("b4", "The Design and Analysis of Algorithms:540");

// Data of the books stock
if(localStorage.getItem("stockb1") == null) localStorage.setItem("stockb1", 30);
if(localStorage.getItem("stockb2") == null) localStorage.setItem("stockb2", 35);
if(localStorage.getItem("stockb3") == null) localStorage.setItem("stockb3", 45);
if(localStorage.getItem("stockb4") == null) localStorage.setItem("stockb4", 40);

//function for shop.html to show the book stock
function bookStock(id){
    document.getElementById(id).innerHTML = "Stock : " + localStorage.getItem(id);
}

function bookPrice(bookId){
    var price = localStorage.getItem(bookId).split(':');
    document.getElementById("price" + bookId).innerHTML = "Price : " + price[1];
}

var book;
//showing pop up for user to decide the book quantity;
function show_productQty(bookId){
    book = bookId;

    var bookData = localStorage.getItem(bookId).split(':');
    
    document.getElementById("bookTitle").innerHTML = bookData[0];
    document.getElementById("bookPrice").value = bookData[1];
    
    document.getElementById("pqtyWrapper").style.display = "block";
    
    var cUser = localStorage.getItem("currentUser");
    if(cUser == admin.username){
        document.getElementById("bookPrice").readOnly = false;
        document.getElementById("buttonPopup").innerHTML = "Set product & stock";
        document.getElementById("buttonPopup").onclick = function() { setNewData(bookId); };
        document.getElementById("prdQty").value = localStorage.getItem("stock" + bookId);
    }
    else{
        document.getElementById("bookPrice").readOnly = true;
        document.getElementById("buttonPopup").onclick = function() { orderBook(); };
        document.getElementById("prdQty").value = 1;
    }
}

function close_productQty(){
    document.getElementById("pqtyWrapper").style.display = "none";
}

//start order data
if(localStorage.getItem("orderb1") == null) localStorage.setItem("orderb1", 0);
if(localStorage.getItem("orderb2") == null) localStorage.setItem("orderb2", 0);
if(localStorage.getItem("orderb3") == null) localStorage.setItem("orderb3", 0);
if(localStorage.getItem("orderb4") == null) localStorage.setItem("orderb4", 0);

var bookQty, maxQty;
function orderBook(){
    bookQty = parseInt(document.getElementById("prdQty").value);
    maxQty = parseInt(localStorage.getItem("stock" + book));
    if(bookQty <= maxQty && bookQty != 0){
        var lastOrder = parseInt(localStorage.getItem("order" + book));

        localStorage.setItem("stock" + book, maxQty - bookQty);
        localStorage.setItem("order" + book, lastOrder + bookQty);
        bookStock('stockb1');
        bookStock('stockb2');
        bookStock('stockb3');
        bookStock('stockb4');
        alert("the product(s) has been added to your cart");
    }
    else alert("the product is out of stock");
}

function setNewData(bookId){
    var bookData = localStorage.getItem(bookId).split(':');

    var newStock = document.getElementById("prdQty").value;
    var newPrice = document.getElementById("bookPrice").value;

    // set new book price and new book stock
    localStorage.setItem(bookId, bookData[0] + ":" + newPrice);
    localStorage.setItem("stock" + bookId, newStock);

    // renew the shown price and book stock
    bookStock("stock"+bookId);
    bookPrice(bookId);

    // show message after change the data
    alert("the new data have been set");
}