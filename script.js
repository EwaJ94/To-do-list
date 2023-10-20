let newTask = document.querySelector(".new")
let saveTask = document.querySelector(".save")
let deleteTask = document.querySelector(".delete")
let openList = document.querySelector(".open-list")
let removeAllTasks = document.querySelector(".remove-all")
let myTasks = document.querySelector(".my-tasks")
// let oneTask = document.querySelector(".one-task")

// EXISTING LS CONDITION
if(localStorage.getItem("tasks") === null){
    var toDoList = []
} else {
    toDoList = JSON.parse(localStorage.getItem("tasks"))
}

// CREATE NEW TASK
newTask.addEventListener("click", function(event){

    let newLabel = document.createElement("label")
    let newCheck = document.createElement("input")

    newCheck.type = "checkbox"
    newCheck.id = "one-check"
    newLabel.setAttribute = ("for", "one-check")
    newLabel.textContent = "new"
    myTasks.appendChild(newCheck)
    myTasks.appendChild(newLabel)
    newLabel.focus()
    

    newText.addEventListener("change", function(event){
        let addNewTask = event.target.value
        toDoList.push(addNewTask)
        })

    })


// SAVE NEW TASK TO LOCAL STORAGE
saveTask.addEventListener("click", function(){
            let toDoListJ = JSON.stringify(toDoList)
            localStorage.setItem("tasks", toDoListJ)
            
            
});

// DELETE TASK 
// deleteTask.addEventListener("click", function(){

// })

// OPEN TO DO LIST
openList.addEventListener("click", function(){
   
    let myToDoList = localStorage.getItem("tasks")
    let myToDoListJ = JSON.parse(myToDoList)
    
    myToDoListJ.forEach(function(oneTask){

        let newLi = document.createElement("li")
        let newText = document.createElement("input")

        newText.type = "text"
        newText.class = "one-task"
        newText.textContent = oneTask


        newLi.appendChild(newText)
        myList.appendChild(newLi)

        
        

    })
})

// REMOVE ALL


removeAllTasks.addEventListener("click", function(){
    localStorage.clear()
    myList.remove()
})

