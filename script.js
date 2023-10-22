let newTask = document.querySelector(".new")
let saveTask = document.querySelector(".save")
let deleteTask = document.querySelector(".delete")
let openList = document.querySelector(".open-list")
let removeAllTasks = document.querySelector(".remove-all")
let myTasks = document.querySelector(".my-tasks")
let oneTask = document.querySelector("#one-to-do")
let oneCheck = document.querySelector("#one-check")

// EXISTING LS CONDITION
if(localStorage.getItem("tasks") === null){
    var toDoList = []
} else {
    toDoList = JSON.parse(localStorage.getItem("tasks"))
}

// CREATE NEW TASK
newTask.addEventListener("click", function(event){
    

    let newDiv = document.createElement("div")
    let newToDo = document.createElement("input")
    let newCheck = document.createElement("input")

    newDiv.id = "one-to-do"
    newToDo.type = "text"
    newToDo.id = "one-new-task"
    newCheck.type = "checkbox"
    newCheck.id = "one-check"
    newDiv.appendChild(newCheck)
    newDiv.appendChild(newToDo)
    myTasks.appendChild(newDiv)
    newToDo.focus()
    
    
    newToDo.addEventListener("change", function(event){
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

oneCheck.addEventListener("change", function(event){
    let done = event.target.checked
    console.log(done)
    if (done === true) {
        toDoList.forEach(function(){
            
       })
    }
})

// oneCheck.addEventListener("change", function(event){
//     let done = event.target.checked
//     deleteTask.addEventListener("click", function(){
//         if (done === true) {
//             oneCheck.remove()
//         }
// })})

// deleteTask.addEventListener("click", function(){
//     oneCheck.addEventListener("change", function(event){
//         let done = event.target.checked
//         console.log(done)
//         if (done === true) {
//             oneCheck.remove()
//         }
//     })
// })

// OPEN TO DO LIST
openList.addEventListener("click", function(){
    document.querySelector(".my-tasks").textContent = ""

    let myToDoList = localStorage.getItem("tasks")
    let myToDoListJ = JSON.parse(myToDoList)

    
    myToDoListJ.forEach(function(oneTask){

        let newDiv = document.createElement("div")
        let newToDo = document.createElement("input")
        let newCheck = document.createElement("input")

        newDiv.id = "one-to-do"
        newToDo.type = "text"
        newToDo.id = "one-new-task"
        newCheck.type = "checkbox"
        newCheck.id = "one-check"

        let currentValue = newToDo.value;
        let newText = oneTask;
        let updatedValue = currentValue + newText;
    
        newToDo.value = updatedValue;

        newDiv.appendChild(newCheck)
        newDiv.appendChild(newToDo)
        myTasks.appendChild(newDiv)

    })
})

// REMOVE ALL


removeAllTasks.addEventListener("click", function(){
    localStorage.clear()
    document.querySelector(".my-tasks").textContent = ""
    location.reload()
})

