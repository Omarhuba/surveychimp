
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    console.log('MONGODB_DATABASE_URI', process.env.MONGODB_DATABASE_URI)
    if (!process.env.MONGODB_DATABASE_URI) {
        throw "500";
    }
    return mongoose.connect(process.env.MONGODB_DATABASE_URI);
}