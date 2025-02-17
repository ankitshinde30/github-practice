const express = require('express');
const app = express();
const path = require('path');// path module is used to set the path of views directory


let port  = 8080;// setting port number

app.use(express.static(path.join(__dirname,'/public/css')));// setting public directory for css
app.use(express.static(path.join(__dirname,'/public/js')));// setting public directory for js
app.set('view engine','ejs'); // setting view engine to ejs
app.set('views',path.join(__dirname,'/views'));// setting views directory

// setting route for home page
app.get('/',(req,res)=>{
    res.render('home.ejs')
}); // rendering home.ejs file

app.get("/rolldice",(req,res)=>{
    let dicevalue =Math.floor(Math.random()*6)+1;
    res.render('rolldice.ejs',{dicevalue});// passing dicevalue to rolldice.ejs file
}); // rendering rolldice.ejs file
 
app.get("/ig/:username",(req,res)=>{
    const instadata= require("./instagram.json");
    let{username} = req.params;
    let user = instadata[username];
    if(!user){
        res.status(404).send("User not found");
    }
    // console.log(instadata);  
    // console.log(user);
    res.render("instagram.ejs",{user});
}); 

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});


//     let username = req.params.username;
//     let followedBy = ["user1","user2","user3","user4","user5"];
//     res.render("instagram.ejs",{username,followedBy});// passing username to instagram.ejs file
// }); // rendering instagram.ejs file

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});// setting server to listen on port 8080