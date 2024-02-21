const MensRanking=require('../models/index');

const createApi= async(req,res)=>{
    try{
        const mensRecord=new MensRanking(req.body);
        console.log(mensRecord);
        const insertMen=await mensRecord.save();
        res.status(201).send(insertMen);
    }
    catch(e){
        res.status(400).send(e);
    }
}

const getApi=async(req,res)=>{
    try{
        const mensData=await MensRanking.find({}).sort({"ranking":1});
        res.status(201).send(mensData)
    }catch(e){
        res.status(400).send(e);

    }
}

const updateApi=async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateData=await MensRanking.findByIdAndUpdate(_id,req.body);
        res.status(201).send(updateData);
    }
    catch(e){
        res.status(400).send(e);
    }
   
}

const deleteApi=async(req,res)=>{
    try{
        const _id=req.params.id;
        const deleData=await MensRanking.findByIdAndDelete(_id,req.body);
        res.status(201).send(deleData);
    }
    catch(e){
        res.status(400).send(e);
    }
    
}

module.exports={createApi,updateApi,getApi,deleteApi};