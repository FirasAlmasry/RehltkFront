import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const countrySchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        cloudinary_id: {
            type: String,
        },
        tours: [
            {
                type: Schema.Types.ObjectId,
                ref: "CountryTours",
            },
        ],
    },
    {
        timestamps: true,
    }
);

countrySchema.plugin(mongoosePaginate);

export default model("Country", countrySchema);
