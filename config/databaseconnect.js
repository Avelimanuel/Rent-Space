import mongoose from "mongoose";

let connected = false 

const connectToDb = async () =>{
    mongoose.set('strictQuery',true)

    //If db is connected,do not connect

    if(connected){
        console.log('Database already connected')
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
        
    } catch (error) {
        console.log(`An error occured ${error}`)
    }
}

export default connectToDb;