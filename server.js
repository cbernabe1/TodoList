import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const port = 3000;
const app = express();
const API_URL = "http://localhost:4000";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",async(req,res)=>{
try {
    const response = await axios.get(API_URL+'/todo');
    res.render("index.ejs",{todos: response.data});
} catch (error) {
    console.log(error);
}
});

app.get("/edit/:id", async(req,res)=>{

    try {
        const response = await axios.get(API_URL+"/todo/"+req.params.id);
        res.render("edit.ejs",
        {
            todo: response.data
        })
    } catch (error) {
        
    }
});

app.listen(port,()=>{
console.log("Running on port " + port);
});

