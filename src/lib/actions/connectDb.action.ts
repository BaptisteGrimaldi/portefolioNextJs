'use server';

import { checkDbConnection } from '../mongoose';

export default async function connectDb() {
    try {
        await checkDbConnection();
    } catch (err) {
        console.log(err);
    }
}
