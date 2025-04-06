console.log("This is index.js");
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

// Constructor
function Book(name, phonenumber, author, days, type) {
    this.name = name;
    this.phonenumber = phonenumber;
    this.author = author;
    this.days = days;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.phonenumber}</td>
                        <td>${book.author}</td>
                        <td>${book.days}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.phonenumber.length < 2 || book.author.length < 2 || book.days.length < 2) {
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let phonenumber = document.getElementById('phonenumber').value;
    let author = document.getElementById('author').value;
    let days = document.getElementById('days').value;
    let type;
    let Home = document.getElementById('Home');
    let programming = document.getElementById('programming');
    let Job = document.getElementById('Job');

    if (Home.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (Job.checked) {
        type = cooking.value;
    }

    let book = new Book(name,phonenumber, author, days, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your booking has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this booking');
    }

    e.preventDefault();
}