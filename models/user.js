const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    password: {
        type: String,
        minlength: 6,
        required: [true, 'Set password for user'],
      },
    email: {
        type: String,
        match: emailRegexp,
        required: [true, 'Email is required'],
        unique: true,
      },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
      },
    token: {
        type: String,
        default: ""
    }
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    subscription: Joi.string().valid('starter', 'pro', 'business').required().default('starter'),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const schemas = {
    registerSchema,
    loginSchema,
}

const User = model("user", userSchema);

module.exports = {
    User,
    schemas,
}


// const userSchema = new Schema{(
//     {
//         password: {
//           type: String,
//           required: [true, 'Set password for user'],
//         },
//         email: {
//           type: String,
//           required: [true, 'Email is required'],
//           unique: true,
//         },
//         subscription: {
//           type: String,
//           enum: ["starter", "pro", "business"],
//           default: "starter"
//         },
//         token: String
//       }
// )}