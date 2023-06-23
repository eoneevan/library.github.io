const addBtn = document.getElementById('add-btn')
const closeBtn = document.querySelector('.overlay-close')
const container = document.querySelector('.container')
const overlay = document.querySelector('.overlay');
const submitbtn = document.querySelector('.btn-submit')

// Overlay Handling
addBtn.addEventListener('click', OverlayHandler)
closeBtn.addEventListener('click', OverlayHandler)

function OverlayHandler(){
    container.classList.toggle('overlayactive');
    overlay.classList.toggle('active');
}

//Create Book

class Book{
    constructor(title, author, pages, read){
        this.title = form.title.value
        this.author = form.author.value
        this.pages = form.pages.value + 'pg'
        this.read = form.read.checked;
    }
}

submitbtn.addEventListener('click', addBookToLibrary)

let myLibrary = []
let newBook;

function addBookToLibrary(){
    event.preventDefault();
    newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);

    form.reset();
    render()
}

function render(){
    const LibraryDisplay = document.querySelector('.library');
    const books = document.querySelectorAll('.book')

    books.forEach(book => {
        LibraryDisplay.removeChild(book)
    });

    for(i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item){
    const LibraryDisplay = document.querySelector('.library');

    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookDiv.classList.add('book')
    bookDiv.setAttribute('id',myLibrary.indexOf(item))

    titleDiv.textContent = item.title
    titleDiv.classList.add('title-lib')
    
    authorDiv.textContent = item.author
    authorDiv.classList.add('author-lib')

    pageDiv.textContent = item.pages
    pageDiv.classList.add('page-lib')

    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pageDiv);

    bookDiv.appendChild(readBtn)

    if(item.read === false){
        readBtn.style.backgroundColor = '#ff000050'
        readBtn.textContent = 'Not Read'
    } else {
        readBtn.style.backgroundColor = '#00800050'
        readBtn.textContent = 'Read'
    }
    bookDiv.append(removeBtn);
    removeBtn.textContent = 'Remove'
    removeBtn.setAttribute('id', 'removeBtn')

    LibraryDisplay.appendChild(bookDiv)
    readBtn.addEventListener('click', ()=>{
        item.read = !item.read
        render()
    })

    removeBtn.addEventListener('click',()=>{
        myLibrary.splice(myLibrary.indexOf(item),1);
        render()
    })
}