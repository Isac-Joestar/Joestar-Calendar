import mongoose from "mongoose";


const uri = process.env.MONGODB_URI!;

if(!uri){
    throw new Error("MONGO_URI is not defined")
}

export default async function connectMongoDB() {
    if (mongoose.connection.readyState >= 1) return;
  
    return (
        mongoose.connect(uri)
            .then(() => console.log('✅ MongoDB conectado com sucesso!'))
            .catch((err) => console.error('🚫 Erro ao conectar no MongoDB:', err))

    )
}