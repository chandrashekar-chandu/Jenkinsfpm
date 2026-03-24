const express = require('express');
const add = require('./math');

const app = express();

app.get('/',(req,res) => {

    const sum = add(5,5);
    res.send(`Sum is: ${sum}`);
});

app.listen(3001, ()=>{
console.log("Server running on port 3001");
});