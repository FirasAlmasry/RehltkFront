import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const salesSchema = new Schema(
    {
        employee: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },
        agent: {
            type: String,
            require: true,
        },
        //   "سعر تكلفة الباكدج بدون الطيران"
        packageWithoutFlightCost: {
            type: Number,
            require: true,
        },
        // "تكلفة الطيران"
        flightCost: {
            type: Number,
            require: true,
        },
        // "سعر بيع الباكدج"
        packagePrice: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

salesSchema.plugin(mongoosePaginate);

export default model("Sales", salesSchema);
