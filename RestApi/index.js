import express from 'express';

const app=express();

const PORT=5111;
app.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT}`)
})