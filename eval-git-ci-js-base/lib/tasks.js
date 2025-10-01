
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

function countDone(){
  let count = 0;
  for (const task of tasks){
    if (task.done) {
      count++;
    }
  }
  return count;
}



module.exports = { getTasks, reset };
