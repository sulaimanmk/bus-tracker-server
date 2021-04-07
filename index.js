const express= require('express');
const cors= require('cors');
const app= express();
app.use(cors());
app.options('*',cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.listen(3000,()=>{
    console.log('Running!');
}) 