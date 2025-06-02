let todos = [];
let idCounter = 1;

export const getTodos = (req, res) => {
  res.status(200).json({ todos });
};

export const addTodo = (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }
  const newTodo = { id: idCounter++, task };
  todos.push(newTodo);
  res.status(201).json({ message: "Todo added", todo: newTodo });
};

export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  todo.task = task;
  res.status(200).json({ message: "Todo updated", todo });
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== parseInt(id));
  res.status(200).json({ message: "Todo deleted successfully" });
};
