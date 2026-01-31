// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasklist = document.getElementById('tasklist');
const completedlist = document.getElementById('completedlist');
// State Management
let tasks = [];     //Arrayto store tasks

// Initialize the application
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('To-Do Application Initialized')

    addBtn.addEventListener('click', addtask);       // (-->addtask())

    // Handle Enter key press
    taskInput.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter') addtask();
    })
});


// Add a new task
function addtask(){      // Create new task object
    const taskText = taskInput.value.trim();

    // Basic validation to prevent empty tasks
    if(taskText=== ''){
        alert('Task cannot be Empty!');
        return;
    }

   
    //Add to tasks array
    tasks.push({text : taskText, completed: false});
    console.log(taskText,'added to task list.');
    taskInput.value='';         // clear input field
    renderTasks();              // Update UI
}
//Toggle task completion
function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
// Handle task clicks (checkbox and delete button)

function renderTasks(){
    tasklist.innerHTML='';
    completedlist.innerHTML='';

    tasks.forEach((task, index)=> {
        const li = document.createElement('li');

        li.textContent=task.text;
        
        if(task.completed){         //li.classList.add('completedlist');
            li.innerHTML = `<span>${task.text}</span>`;
            completedlist.appendChild(li);
        } else{
            li.innerHTML = `<span>${task.text}</span>
                        <button id='completeBtn' onclick="toggleTask(${index})">Complete</button>
            `;
            tasklist.appendChild(li);
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');

        deleteBtn.addEventListener('click',()=>{
            tasks.splice(index, 1);
            console.log(task.text,'deleted.');
            renderTasks();
        });

        li.addEventListener('click',()=>{
            task.complete = !task.completed;
            renderTasks();
        });

        li.append(deleteBtn);
        
    });
}
    
    
    

    

    
    

    
    




    // Handle checkbox click
    

    //Handle delete button click
    
// Toggle task completion
