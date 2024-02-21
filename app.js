const express=require('express');
const app=express();
const connectDB=require('./connection');
const apiRouter=require('./router/index');

const port= 3000;

app.use(express.json());
connectDB("mongodb://0.0.0.0:27017/api-data")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(`Error in mongodb: ${err}`));

app.use('/mens',apiRouter)


app.listen(port,()=>{
    console.log("Server listening on port",port);
});

