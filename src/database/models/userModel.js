import mongoose from "mongoose";

const User = mongoose.model('user', {
    username: String,
    roles: Array,
    email: String,
    password: String,
});

export { User };