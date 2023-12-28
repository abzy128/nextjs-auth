import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_URI;
export const dbClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export const db = dbClient.db("userdb");
export const users = db.collection("users");