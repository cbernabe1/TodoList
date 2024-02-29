import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

var todo = [
    {
        id: 1,
        todoName: "The Rise of Decentralized Finance",
        todoDescription: "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
        todoDate: "2023-08-01T10:00:00Z"
    }
]

app.get("/todo",(req,res)=>{
res.json(todo);
});


app.listen(port,()=>{
console.log("Running on port " + port);
});