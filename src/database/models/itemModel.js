import mongoose from "mongoose";
// ajust no commit
const Item = mongoose.model("item", {
  name: String,
  attunement: Boolean,
  type: String,
  subtype: String,
  rarity: String,
  description: Array,
  powerIdentity: Array,
});

export { Item };
