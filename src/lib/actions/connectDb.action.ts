'use server';

import { FilterQuery } from "mongoose";
import { connectToDatabase } from '../mongoose';
import Lead from "@/database/lead.model";

export async function addLead(lead:string) {
    try {
        await connectToDatabase();

        const query: FilterQuery<typeof Lead> = {
            gmail: lead
        };
        const newLead = new Lead(query);
        await newLead.save();

    } catch (err) {
        console.log(err);
    }
}


