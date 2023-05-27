import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const userOrdersSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        phone: {
            type: String,
            require: true,
        },
        bookingFlight: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

userOrdersSchema.plugin(mongoosePaginate);

export default model("UserOrders", userOrdersSchema);
