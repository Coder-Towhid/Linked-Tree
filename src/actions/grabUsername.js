"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/libs/models/page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

// Ensure database is connected
async function connectToDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI);
    }
}

export default async function handleFormSubmit(formData) {
    const username = formData.get('username');

    // Connect to MongoDB
    await connectToDB();

    // Check if the page already exists
    const existingPageDoc = await Page.findOne({ uri: username });
    if (existingPageDoc) {
        return false;  // Handle the case where the page already exists
    } else {

        const session = await getServerSession(authOptions)


        console.log('Session email:', session?.user?.email);

        if (!session?.user?.email) {
            throw new Error('User session is missing email.');
        }

        const newPage = await Page.create({
            uri: username,
            owner: session.user.email, // Ensure session has email before creating the document
        });

        // Convert the Mongoose model instance to a plain object
        const plainNewPage = newPage.toObject();

        // Pass only serializable data to client components
        return { uri: plainNewPage.uri, owner: plainNewPage.owner };
    }
}
