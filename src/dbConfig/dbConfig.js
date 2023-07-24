import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('Db connect successfully');
        })

        connection.on('error',(err)=>{
            console.log('Db connect failled');
            console.log(err);
            process.exit()
        })
    }catch(err){
        console.log('Something goes Worng!!');
        console.log(err);
    }
}