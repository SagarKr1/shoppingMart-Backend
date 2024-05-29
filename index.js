const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send('<h1> Welcome to Shopping Mart </h1>')
})

app.use('/',routes);

app.listen(5000,()=>{
    console.log("Server running at http://localhost:5000");
})