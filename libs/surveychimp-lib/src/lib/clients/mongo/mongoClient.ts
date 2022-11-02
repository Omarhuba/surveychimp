
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    console.log('MONKEYS_DB', process.env.MONKEYS_DB)
    if (!process.env.MONKEYS_DB) {
        throw "500";
    }
    return mongoose.connect(process.env.MONKEYS_DB);
}