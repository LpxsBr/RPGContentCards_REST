import mongoose from "mongoose";
import { databaseHost, databaseName } from "../config/env.js";
import { Spell } from "./models/speellModel.js";
import { Item } from "./models/itemModel.js";
import { User } from "./models/userModel.js";


const connectDatabase = mongoose.connect(`${databaseHost}`, { dbName: databaseName });


export default {
    connectDatabase,
    Spell,
    Item,
    User
}