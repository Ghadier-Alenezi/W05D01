const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
// App level middleware
let todos = [
  { id: 1, taskName: "wakeup", completed: "true" },
  { id: 2, taskName: "breakfast", completed: "false" },
  { id: 3, taskName: "exercise", completed: "false" },
  { id: 4, taskName: "code", completed: "true" },
];

// check the server
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// crud
// read  == get all the todos
app.get("/todos", (req, res) => {
  // res.status res.json just like return didn't used more then once
  res.status(200);
  res.json(todos);
});

// get one todo by the taskName
app.get("/task", (req, res) => {
  const { name } = req.query;
  const found = todos.find((elem) => {
    return elem.taskName === name;
  });
  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("this todo is not found");
  }
});

// get completed tasks
app.get("/todo_completed",(req,res) =>{
  const {completed} = req.query;
  const completedTasks = todos.filter((todo)=>{
    todo.completed === true;
  })

  if (completedTasks.length) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("there in no completed tasks");
  };
});

// creat == post
//  creat new task in the main todos
app.post("/create", (req, res) => {
  const { id, taskName, completed } = req.body;
  const newTask = ({ id: 5, taskName: "sleep", completed: "false" });
  todos.push(newTask);
  res.status(201);
  res.json({ id, taskName, completed });
});

// update == put
// update to not completed
// app.put("/update_uncomplete", (req, res)=>{
// });
// delete == delete
// app.put("/delete_task", (req, res)=>{
// });

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
