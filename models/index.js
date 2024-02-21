const mongoose=require('mongoose')

const menSchema=new mongoose.Schema(
    {
        ranking:{
            type:Number,
            required:true,
            unique:true,
        },
        name:{
            type:String,
            required:true,
        },
        score:{
            type:String,
            required:true,
        },
    }
)

const MensRanking=mongoose.model("Mensranking",menSchema);

module.exports =MensRanking;