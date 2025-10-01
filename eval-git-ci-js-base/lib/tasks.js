
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}


function addTask(title, description = '') {
  if (!title || typeof title !== 'string' || title.trim() === '') {
    throw new Error('Task title is required and must be a non-empty string');
  }
  
  const task = {
    id: nextId++,
    title: title.trim(),
    description: description.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(task);
  return task;
}

function reset() {
  tasks = [];
  nextId = 1;
}


function toggleTask(id){
  const task = task.find(t => t.id === id);
  if (task){
    task.done = !task.done;
  }
}

function countDone(){
  let count = 0;
  for (const task of tasks){
    if (task.done) {
      count++;
    }
  }
  return count;
}



module.exports = { getTasks, addTask, reset };
