import mongoose from "mongoose";

const Item = mongoose.model('item', {
    name: String,
    attunement: Boolean,
    type: String,
    rarity: String,
    description: Array,  
})

export { Item }