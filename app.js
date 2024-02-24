const express = require('express');
const app = express();
const port = 3000;



app.get('/' , (req , res) => {
    res.send("Hello Ecommerse")
})

app.listen(port , (err) => {
    if(err) {
        console.log(`Error occured: ${err.message}`);
    }else {
        console.log(`Request is listening at port: ${port}`);
    }
})