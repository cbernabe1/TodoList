import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const port = 3000;
const app = express();
const API_URL = "http://localhost:4000";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//get all the todos in the api
app.get("/",async(req,res)=>{
try {
    const response = await axios.get(API_URL+'/todo');
    res.render("index.ejs",{todos: response.data});
} catch (error) {
    console.log(error);
}
});

//get the chosen todos to view its description
app.get("/edit/:id", async(req,res)=>{
    try {  
        const response = await axios.get(API_URL+"/todo/"+req.params.id);
        res.render("edit.ejs",
        {
            heading: "Update Todo",
            todo: response.data
        })
    } catch (error) {
        
    }
});

//redirect to create new post
app.get("/new",(req,res)=>{
    res.render("edit.ejs",{
        heading: "New Todo"
    });
});

//add todo
app.post("/api/todo",async(req,res)=>{
    try {
        console.log(req.body);
        const response = await axios.post(API_URL+"/todo"+req.body);
        res.redirect("/");
    } catch (error) {
        res.status(500).json({message: "Error creating the todo"});
    }
});

app.listen(port,()=>{
console.log("Running on port " + port);
});

