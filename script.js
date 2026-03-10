const noteTitle = document.getElementById("note-title");

const noteContent = document.getElementById("note-content");

const saveBtn = document.getElementById("save-btn");

const notesList = document.getElementById("notes-list");

// Local storage
// let userNotes = JSON.parse(localStorage.getItem("notes")) || [];


// Local storage
function saveToLocalStorage() {
    // Probelm -2 solution
    localStorage.setItem(("title", "content"), JSON.stringify(inputNote.value,contentInput.value));
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
        // problem 1 solution
  title : noteTitle.value,
  content:  noteContent.value
};

// Add it to notes arrays 
if (!noteObject) return; {
        // Use the push() method to add the user's input to the array
        userNotes.push(noteObject);
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


let userNotes = [];

function addNote() {
    //  Get title
    const title = noteTitle.value.trim();
    // Get content
    const content = noteContent.value.trim();
    // Validate inputs
     if(!inputNote) return;
    if(!contentInput) return;


    // Create Objects
   const noteObject =   {
        title: title,
        content : content
    }
    // add note object to userNotes 
    userNotes.push(noteObject)


    // Save Notes to localStorage
   localStorage.setItem("notes", JSON.stringify(userNotes));
}


function renderNotes() {
    // Clean UI
    notesList.innerHTML = "";
    userNotes.forEach((note,index) => {
        const list = document.createElement("li");
        list.textContent = note.title + " " + note.content
        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = index;
        notesList.appendChild(list);
    });
}













// How to Improve Logical Thinking for Coding

// Whenever you get stuck, ask these 4 questions:

// 1️⃣ Where is the data stored?
// 2️⃣ What new data do I have?
// 3️⃣ What operation do I want?
// 4️⃣ Which method does that operation?