const express = require('express');
const app = express();

app.use(express.static('./dist/cv-angular8'));

app.get("/*",(req,res)=>{
    res.sendFile('index.html',{root:'dist/cv-angular8'});
})

app.listen(process.env.PORT || 8080);
console.log(`Running on port ${process.env.PORT || 8080}`);