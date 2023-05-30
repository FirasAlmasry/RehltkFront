import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const countryToursSchema = new Schema(
    {
        country: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Country",
        },
        title: {
            type: String,
            required: true,
        },
        subTitle: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
        },
        cloudinary_id: {
            type: String,
        },
        days: [{
            title: String,
            description: String,
        }]
    },
    {
        timestamps: true,
    }
);

countryToursSchema.plugin(mongoosePaginate);

export default model("CountryTours", countryToursSchema);
