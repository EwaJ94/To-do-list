let newTask = document.querySelector(".new")
let saveTask = document.querySelector(".save")
let deleteTask = document.querySelector(".delete")
let openTask = document.querySelector(".open")
let removeAllTasks = document.querySelector(".remove-all")
let myList = document.querySelector(".task")
let myTasks = document.querySelector(".my-task")
let oneTask = document.querySelector("#one-task")

// ADD NEW TASK
newTask.addEventListener("click", function(){
    
    let newLi = document.createElement("li")
    let newText = document.createElement("input")
    
    newText.type = "text"
    newLi.appendChild(newText)
    myList.appendChild(newLi)
})

// SAVE NEW TASK TO LOCAL STORAGE

// oneTask.addEventListener("input", function(event){
//     let myTask = event.target.value
    
// })


// saveTask.addEventListener("click", function(){
//     localStorage.setItem("task", "myTask")
// })
