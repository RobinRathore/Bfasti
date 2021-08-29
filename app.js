const express=require("express")
const app =express()
const port=41
const path=require("path")
const fs=require("fs")



// app.get('/',function(req,res) {
//     res.sendFile('Delivery1.html');
//   });

// const http=require('http');
// const fs= require('fs');
// const { url } = require("inspector")
// const hostname="127.0.0.1"
// const port=40
// const delivery=fs.readFileSync("./Delivery1.html")
// const server=http.createServer((req,res)=>{
//     console.log(url)
//     url=req.url;
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html');
//     if(url=="/"){
//         res.end(delivery);
//     }
//     else{
//         res.statusCode=404
//         res.end("<h1>404 not found<h1>")
//     }
// })
// server.listen(port,hostname,() =>{
//     console.log(`server running at http://${hostname}:${port}');
// })














// // for serving static files
app.use("/static",express.static("static")) 


// pug specific stuff

app.set("view engine","pug")
app.set("views",path.join(__dirname, "views"))
app.get("/Delivery",(req,res)=>{
    res.status(200).render("Delivery",{title:"Fastest Delivery"})

})
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post("/",(req,res)=>{
    const params={"message":"your form has been submitted successfully"}
    Name=req.body.Name;
    Phone = req.body.Phone
    Email=req.body.Email
    Message=req.body.Message
    
    content= `name is ${Name} , phone is ${Phone}, Email is ${Email}, Message is ${Message}`
    fs.writeFileSync("Contactus.txt",content)
    res.render("Delivery.pug",params)
})
app.post("/a",(req,res)=>{
    const params={"message":"your form has been submitted successfully"}
    name=req.body.name
    phone = req.body.phone
    email=req.body.email
    
    
    content= `name is ${name} , phone is ${phone}, Email is ${email}`
    fs.writeFileSync("PersonalInformation.txt",content)
    res.render("Delivery.pug",params)
})




app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})
