
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    console.log('MONKEYS_DB_DEV', process.env.MONKEYS_DB_DEV)
    if (!process.env.MONKEYS_DB_DEV) {
        throw "500";
    }
    return mongoose.connect(process.env.MONKEYS_DB_DEV);
}