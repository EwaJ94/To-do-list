let newTask = document.querySelector(".new")
let saveTask = document.querySelector(".save")
let deleteTask = document.querySelector(".delete")
let openList = document.querySelector(".open-list")
let removeAllTasks = document.querySelector(".remove-all")
let myList = document.querySelector(".task")
let myTasks = document.querySelector(".my-task")
// let oneTask = document.querySelector(".one-task")

// EXISTING LS CONDITION
if(localStorage.getItem("tasks") === null){
    var toDoList = []
} else {
    toDoList = JSON.parse(localStorage.getItem("tasks"))
}

// CREATE NEW TASK
newTask.addEventListener("click", function(){
    
    let newLi = document.createElement("li")
    let newText = document.createElement("input")
    
    newText.type = "text"
    newText.id = "one-task"
    newLi.appendChild(newText)
    myList.appendChild(newLi)

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
    // vyčištění okna a potom otevření listu

    let myToDoList = localStorage.getItem("tasks")
    let myToDoListJ = JSON.parse(myToDoList)

        toDoList.forEach(function(oneTask){
        let mylist = document.createElement("li")
        let myinput = document.createElement("input")

        myinput.type = "text"

        // newLi.appendChild(newText)
        // myList.appendChild(newLi)

        // mylist.textContent = myinput
        myinput.textContent = oneTask
        mylist.textContent = myinput

        document.querySelector(".task").appendChild(myinput)
        

    })
})

// REMOVE ALL
removeAllTasks.addEventListener("click", function(){
    localStorage.clear()
})

