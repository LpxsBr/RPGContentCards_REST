import mongoose from "mongoose";

const Spell = mongoose.model("spell", {
  name: String,
  level: Number,
  conjurer: Array,
  school: String,
  description: Array,
  castingTime: String,
  range: String,
  damageResume: Array,
  damageType: String,
  components: Array,
  duration: String,
  source: String,
});

export { Spell };
