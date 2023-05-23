/* eslint-disable */
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

// Get the email address from the command line arguments.
const email = process.argv[2];

if (!email) {
    console.log("");
    console.log("Please provide an email address.");
    console.log("");
    process.exit(1);
}

const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (!email.match(emailRegex)) {
    console.log("");
    console.log("😥 The email address is not valid.");
    console.log("");
    process.exit(1);
}

async function connectToDb() {
    try {
        const DATABASE =
            process.env.NODE_ENV === "test"
                ? process.env.DATABASE_TEST
                : process.env.DATABASE;

        const client = await mongoose.connect(DATABASE, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        return client.connection.db;
    } catch (error) {
        console.log("DB connection failed", error);
        process.exit(1);
    }
}

async function init() {
    const db = await connectToDb();
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
        console.log("");
        console.log("😥 A user with a given email address already exists.");
        console.log("");
        process.exit(1);
    }

    try {
        await db.collection("users").insertOne({
            name: "rehlitk",
            email: email,
            password:
                "$2a$10$VAiyJ0RlilvsMzgm1FIxGus8.9reDx2Y/LOfiZ06cNvwUBZjINU5a",
            phone: "123456789",
            roles: ["create", "delete", "edit", "read"],
        });
        console.log("");
        console.log("✅ A super admin user has been created successfully.");
        console.log("");
        console.log("ℹ️  The login credentials are:");
        console.log("");
        console.log("- Email:    ", email);
        console.log("- Password: ", "admin@123");
        console.log("");
        console.log(
            "ℹ️  You can change the profile information and the password from the setting's account page."
        );
        console.log("");
        process.exit();
    } catch (error) {
        console.log("");
        console.log(
            "😥 An error occurred while creating a super admin user, error: ",
            error
        );
        console.log("");
        process.exit(1);
    }
}

init();
