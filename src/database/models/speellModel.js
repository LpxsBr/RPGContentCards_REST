import mongoose from "mongoose";
//ajuste no commit

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
  source: String,
  duration: String,
});

export { Spell };
