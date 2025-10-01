const { getTasks, addTask, reset } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

describe('addTask', () => {
  test('adds a task with a unique id', () => {
    const task1 = addTask('Task 1');
    const task2 = addTask('Task 2');
    
    expect(task1.id).toBeDefined();
    expect(task2.id).toBeDefined();
    expect(task1.id).not.toEqual(task2.id);
    
    const tasks = getTasks();
    expect(tasks).toHaveLength(2);
    expect(tasks[0]).toEqual(task1);
    expect(tasks[1]).toEqual(task2);
  });
  
  test('trims task name', () => {
    const task = addTask('  Task with spaces  ');
    expect(task.title).toBe('Task with spaces');
  });
  
  test('sets done to false by default', () => {
    const task = addTask('New task');
    expect(task.completed).toBe(false);
  });
  
  test('throws error if name is empty', () => {
    expect(() => addTask('')).toThrow('Task title is required and must be a non-empty string');
    expect(() => addTask('   ')).toThrow('Task title is required and must be a non-empty string');
  });
  
  test('throws error if name is not a string', () => {
    expect(() => addTask(null)).toThrow('Task title is required and must be a non-empty string');
    expect(() => addTask(123)).toThrow('Task title is required and must be a non-empty string');
    expect(() => addTask({})).toThrow('Task title is required and must be a non-empty string');
  });
});
