import mongoose from "mongoose";

const Item = mongoose.model("item", {
  name: String,
  attunement: Boolean,
  type: String,
  subtype: String,
  rarity: String,
  powerIdentity: Array,
  description: Array,
});

export { Item };
