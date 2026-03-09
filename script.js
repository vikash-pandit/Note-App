const noteTitle = document.getElementById("note-title");

const noteContent = document.getElementById("note-content");

const saveBtn = document.getElementById("save-btn");

const notesList = document.getElementById("note-list");

// Local storage
let userNotes = JSON.parse(localStorage.getItem("notes")) || [];


// Local storage
function saveToLocalStorage() {
    localStorage.setItem(("title", "content"), JSON.stringify(inputNote,contentInput));
}

function loadFromLocalStorage() {
    const storeTodos = localStorage.getItem("title");
}



function addNote () {
    // Get Input Title
    const inputNote = noteTitle.value.trim();
     if(!inputNote) return;
   const title =  noteTitle.value = "";


    // Get Content Input
    const contentInput = noteContent.value.trim();
    if(!contentInput) return;
   const content =  noteContent.value = "";


    // Create a note object
    const noteObject = {
  title : noteTitle,
  content:  noteContent
};

// Add it to notes arrays 
if ((title && content) !== "") {
        // Use the push() method to add the user's input to the array
        userNotes.push(title && content);
}
// Local storage

saveToLocalStorage();
loadFromLocalStorage();

//  Re-render notes

inputNote();
contentInput();



}


// When user clicks Save:

// Get title input

// Get content input

// Create a note object

// Add it to notes array

// Save to localStorage

// Re-render notes

// Clear inputs

// Question:

// 👉 Why should we re-render notes after adding one?