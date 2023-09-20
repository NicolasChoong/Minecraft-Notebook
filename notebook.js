const notesAll = document.getElementById("container")
const notesContainer = document.getElementById("app")
const addNoteBtn = notesContainer.querySelector(".add-note")

//when page loads, get all of the notes from localstorage and display to user
getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content)
    notesContainer.insertBefore(noteElement, addNoteBtn.nextSibling)
});

addNoteBtn.addEventListener("click", () => addNote())

//get all notes from localstorage
function getNotes() {
    return JSON.parse(localStorage.getItem("minecraft-notebooks") || "[]")
}
  
//save notes into an array
function saveNotes(notes) {
    localStorage.setItem("minecraft-notebooks", JSON.stringify(notes))
}

function createNoteElement(id, content) {
    const div = document.createElement("div")
    const showTitle = document.createElement("h1")
    const showBtn = document.createElement("button")
    const btn = document.createElement("button")

    div.classList.add("note")
    showTitle.classList.add("show-note")
    showBtn.classList.add("open-note")
    btn.classList.add("delete-button")

    if (content == null) {
        showTitle.innerHTML = " "
    } else {
        if (content.length >= 20) {
            showTitle.innerHTML = content.slice(0,17) + "\u2026";
        } else {
            showTitle.innerHTML = content
        }
    }

    btn.innerHTML = '<i class="fa fa-close"></i>'

    div.appendChild(showTitle)
    div.appendChild(showBtn)
    div.appendChild(btn)

    showBtn.addEventListener("click", () => {
        openPopElement(id)
        scrollToTop()
        disableScroll()
    })

    btn.addEventListener("click", () => {
        deleteNote(id, div)
    })

    return div
}

function openPopElement(id) {
    const selectNote = getNotes().filter(note => note.id == id)
    createPopElement(selectNote[0].id, selectNote[0].content, selectNote[0].content2)
}

function createPopElement(id, content, content2) {
    const divAll = document.createElement("div")
    const divPop = document.createElement("div")
    const element1 = document.createElement("textarea")
    const element2 = document.createElement("textarea")
    const closeBtn = document.createElement("button")

    divAll.classList.add("bruh")
    divPop.classList.add("pop-up")
    element1.classList.add("title")
    element2.classList.add("body")
    closeBtn.classList.add("close-pop-up")

    element1.setAttribute("maxlength", "30")
    element1.placeholder = "New Title..."
    element2.placeholder = "New Content..."
    closeBtn.innerHTML = '<i class="fa fa-close""></i>'

    divPop.appendChild(element1)
    divPop.appendChild(element2)
    divAll.appendChild(divPop)
    divAll.appendChild(closeBtn)

    element1.value = content
    element2.value = content2

    closeBtn.addEventListener("click", () => {
        updateNote(id, element1.value, element2.value)
        //location.reload()   
        enableScroll()
        divAll.remove()
        liveUpdate()
    })

    divPop.addEventListener("click", (event) => {
        // Check if divPop itself was clicked
        if (event.target === divPop) {
            updateNote(id, element1.value, element2.value)
            enableScroll()  
            divAll.remove()
            liveUpdate()
        } else if (event.target === element1) {
            updateNote(id, element1.value, element2.value)
        } else if (event.target === element2) {
            updateNote(id, element1.value, element2.value)
        } 
    });

    disableScroll()

    return notesAll.appendChild(divAll)
}

//adding new note to html and localstorage
function addNote() {
    const existingNotes = getNotes()
    const notesObject = {
        id: Math.floor(Math.random() * 100000),
        content: "",
        content2: ""
    }

    const noteElement = createNoteElement(notesObject.id)
    notesContainer.insertBefore(noteElement, addNoteBtn.nextSibling)

    existingNotes.push(notesObject)
    saveNotes(existingNotes)

    console.log(getNotes())
}

//update exisitng note
function updateNote(id, newContent, newContent2) {
    const balls = getNotes()
    const targetNote = balls.filter(note => note.id == id)[0]

    console.log(targetNote)
    //can think of this as balls.content too
    targetNote.content = newContent
    targetNote.content2 = newContent2
    //saveNotes balls because you are changing the shit thats ady in it not saving it
    saveNotes(balls)

}

//delete note using the id and the html element
function deleteNote(id, deleted) {
    const deletingNote = getNotes().filter(note => note.id !== id)
    saveNotes(deletingNote)
    notesContainer.removeChild(deleted)
}

function deleteElement(element) {
    notesContainer.removeChild(element)
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function disableScroll() {
    const body = document.body
    body.classList.add("body-stop")
}

function enableScroll() {
    const body = document.body;
    body.classList.remove("body-stop")
}

function liveUpdate() {
    getNotes().forEach(() => {
        const childElements = notesContainer.children
        for (let i = 1; i < childElements.length; i++) {
            const childToRemove = childElements[i];
            notesContainer.removeChild(childToRemove);
            console.log("After is " + childElements.length)
        }
    })
    getNotes().forEach(note => {
        const noteElement = createNoteElement(note.id, note.content)
        notesContainer.insertBefore(noteElement, addNoteBtn.nextSibling)
    });
}
