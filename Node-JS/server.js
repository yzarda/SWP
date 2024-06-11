const express = require("express")
const bodyParser = require('body-parser');

const app = express
const port = 3000;

app.request(bodyParser.urlencoded({extended}))
app.use(bodyParser.json());

const data = [
                {name:"hans", age: 17},
                {name:"paul", age: 17},
                {name:"peter", age: 17},
                {name:"sepp", age: 17},
]

app.get("/people/:id",(req, res)=>{
    let id = req.params.id;
    res.send(data[id]);
});

app.delete("/people/:id", (req,res)=>{

    let id = req.params.id;
    data.splice(id,1);
})

app.post("/people", (req,res)=>{
    data.push(req.body);
    res.send(req.body)
})

app.listen(port, () =>{
    console.log("Server running on port" + port);
})
