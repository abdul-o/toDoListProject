// Replace this in todorouter.js
// import express from "express";
// import { getTodos, addTodo, updateTodo, deleteTodo } from "../controller/toDoController.js";

// const router = express.Router();

// router.get("/todos", getTodos);
// router.post("/todos", addTodo);
// router.put("/todos/:id", updateTodo);
// router.delete("/todos/:id", deleteTodo);

// export default router;




import express from "express";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from "../controller/toDoController.js";

const router = express.Router();

router.get("/todos", getTodos);
router.post("/todos", addTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;

