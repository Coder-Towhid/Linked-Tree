import { model, models, Schema } from "mongoose"


const PageSchema = new Schema({
    uri: { type: String, required: true, unique: true, min: 1 },
    owner: { type: String, required: true },
    displayName: { type: String, default: "" },
    location: { type: String, default: "" },
    bio: { type: String, default: "" }
}, { timestamps: true });



export const Page = models.Page || model('Page', PageSchema);

