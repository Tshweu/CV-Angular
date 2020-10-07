const express = require('express');
const app = express();

app.use(express.static('./dist/CV-Angular8'));

app.get("/*",(req,res)=>{
    res.sendFile('index.html',{root:'dist/CV-Angular8'});
})

app.listen(process.env.PORT || 8080);
console.log(`Running on port ${process.env.PORT || 8080}`);