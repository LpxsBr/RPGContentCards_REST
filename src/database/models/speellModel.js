import mongoose from "mongoose";

const Spell = mongoose.model('spell', {
    name: String,
    level: Number,
    school: String,
    description: Array,
    castingTime: String,
    range: String,
    components: Array,
    duration: String
});

export { Spell };