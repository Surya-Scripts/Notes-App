const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function show(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

show()

function storage(){
    localStorage.setItem("notes", notesContainer.innerHTML );
}

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p"); 
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    })

    notesContainer.addEventListener("click",function(n){
        if(n.target.tagName === "IMG"){
            n.target.parentElement.remove()
            storage()
        }
        else if(n.target.tagName === "P" ){
            notes = document.querySelectorAll(".input-box");
            notes.forEach(nt =>{
                nt.onkeyup = function(){
                    storage();
                }
            })
        }
    })

    document.addEventListener("keydown", event =>{
         if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
        
         }
    })