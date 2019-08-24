const express=require('express');
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20')
const app = express();
const port=process.env.PORT || 5000;


app.get('/',(req , res)=>{
    res.send('helloword');
})

app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})