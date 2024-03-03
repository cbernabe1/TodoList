import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var date = new Date().toJSON();
var todos = [
    {
        id: 1,
        todoName: "The Rise of Decentralized Finance",
        todoDescription: "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
        todoDate: "2023-08-01T10:00:00Z"
    }
]

app.get("/todo",(req,res)=>{
res.json(todos);
});

app.get("/todo/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const findTodo = todos.find((todo) => todo.id === id);
    res.json(findTodo);
});

app.post("/todos",(req,res)=>{    
const newTodo = {
    id: todos.length + 1,
    todoName: req.body.todoName,
    todoDescription: req.body.todoDescription,
    todoDate: date
};
todos.push(newTodo);
res.json(newTodo);
});

app.delete("/todo/:id", (req,res)=>{
const id = parseInt(req.params.id);
const findTodo = todos.findIndex((todo)=> todo.id === id);
if(findTodo > -1){
    todos.splice(findTodo,1);
    res.sendStatus(200);
}else{
    res.
    status(400).json({error: "Error deleting the todo"});
}
});

app.patch("/todos/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const findTodo = todos.find((todo) => todo.id === id);
    const updatedTodo = {
        id: findTodo.id,
        todoName: req.body.todoName || findTodo.todoName,
        todoDescription: req.body.todoDescription || findTodo.todoDescription,
        todoDate: date
    }
    const findIndex = todos.findIndex((todo) => todo.id === id);
    todos[findIndex] = updatedTodo;
    res.json(updatedTodo);
});
app.listen(port,()=>{
console.log("Running on port " + port);
});