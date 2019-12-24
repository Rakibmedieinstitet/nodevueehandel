const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan= require("morgan");

const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.get("/home", (req, res)=>{
    res.send({
        namn:"Rakib's hemsida"

    })
    
})

app.listen(process.env.PORT || 8081)