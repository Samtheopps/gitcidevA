
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
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



module.exports = { getTasks, reset };
