console.log('This is ES6 version of Project 2');
class Book {
    constructor(name,phonenumber, author, days, type) {
        this.name = name;
        this.phonenumber = phonenumber;
        this.author = author;
        this.days = days;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.phonenumber}</td>
                            <td>${book.author}</td>
                            <td>${book.days}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.phonenumber.length < 2 || book.author.length < 2 || book.days.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);

    }
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
        type = Home.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (Job.checked) {
        type = Job.value;
    }

    let book = new Book(name, phonenumber, author, days, type);
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