const express = require('express');
const app = express();

const logger =  (req, res, next) =>{
    const date = new Date()
    const hours = date.getHours()
    const day = date.getDay()
    if ((hours>9 && hours<17)&&(day>0 && day<6)){
        next()
    }
    res.send("<h1>please come back in working time</h1>")
    }


app.get("/", logger,(req, res)=> {
    res.sendFile(__dirname+"/public/index.html");
});
app.get("/about",logger ,(req, res)=> {
    res.sendFile(__dirname+"/public/About.html");
});
app.get("/contact", logger ,(req, res)=> {
    res.sendFile(__dirname+"/public/Contact.html");
});
app.get("/style.css", (req, res)=>{
    res.sendFile(__dirname + "/public/style.css");
})


const port = 5000
app.listen(port, ()=> console.log(`exemple app listening on port ${port}`));