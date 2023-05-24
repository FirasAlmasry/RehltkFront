import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import bcrypt from "bcryptjs";
const userSchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        phone: {
            type: String,
            lowercase: true,
            required: true,
        },
        roles: {
            type: [String],
            lowercase: true,
            default: ["read"],
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", function (next) {
    let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) return next();

    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = async function comparePassword(data) {
    return bcrypt.compareSync(data, this.password);
};
userSchema.plugin(mongoosePaginate);

export default model("User", userSchema);
