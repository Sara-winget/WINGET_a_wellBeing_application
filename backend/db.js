import mongoose from "mongoose";
export const db=async()=>{
    try{
        const dbs=mongoose.connect(process.env.DB)
        console.log(`db connected successfully`)
    }
    catch(e){
        console.log(`something went wrong ${e.message}`)
    }
}

