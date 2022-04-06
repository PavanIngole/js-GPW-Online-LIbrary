console.log("Welcome to index.js");
//Todos 
// 1.store all the data to localStorage
// 2.give another column ass an option to delete the book
// 3. add a scroolbar to the view


//Constructor
function Book(name ,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}
//Display Constuctor
function Display(){

}

//Add method to display prototype
Display.prototype.add =function(book){
console.log("Added to UI..");
let tableBody= document.getElementById('tableBody');

let uiString = ` <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                 </tr> `
        tableBody.innerHTML += uiString;
}
//Implement the clear function 
Display.prototype.clear=function (){
    let libraryForm=document.getElementById("libraryForm");
    libraryForm.reset();
}

//Implement the validate function 
Display.prototype.validate=function (book){
    if (book.name.length<3 || book.author.length<3 ){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type,displaymessage){
    let message= document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message :</strong> ${displaymessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                      </div> `
                    
                    setTimeout(function() {
                        message.innerHTML= '';
                    }, 3000);
}

//Add submit event listener to libraryForm

let libraryForm=document.getElementById("libraryForm");
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    
    let name =document.getElementById('bookName').value;
    let author =document.getElementById('author').value;
    // dsa,jp,cc
    let Horror_stories =document.getElementById('Horror_stories');
    let fiction=document.getElementById('fiction');
    let stories=document.getElementById('stories');
    
    let type;
    if(Horror_stories.checked){
        type=Horror_stories.value;
    }
    else if (fiction.checked){
        type=fiction.value;
    }
    else if (stories.checked){
        type=stories.value;
    }
    
    console.log("You have submitted library form...");
    let book =new Book(name,author,type);
    console.log(book);

    let display =new Display();

    if (display.validate(book)){
        display.add(book);
        display.clear();
        display.show("Success", "your book has been sucessfully added");
    }else{
        //show error to the user..
        display.show("error","sorry ! you cannot add this book");
    }
        e.preventDefault();
}
