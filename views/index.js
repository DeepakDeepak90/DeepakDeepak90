const express=require("express");
const ejs=require("ejs");
const path=require("path");
const port=3000;
const app=express();
app.set("view engine","ejs")
const staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath))
app.get("/",(res,req)=>{
    res.render("index")
})
app.listen(port,(res,req)=>{
    console.log(` I Am Connected ${port}`);
})