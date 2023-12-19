'user server';
import { MongoClient } from "mongodb";
import { use } from "react";

export type LoginRequest = {
    username: string;
    password: string;
};
export type LoginResponse = {
    status: (code: number) => LoginResponse;
    json: (data: any) => LoginResponse;
};

const LoginFunction = async (req: LoginRequest, res: LoginResponse) => {
    try {
        const mongoUri = process.env.MONGODB_URI || "";
        const client = new MongoClient(mongoUri, { monitorCommands: true });
        const db = client.db("userDb");
        const collection = db.collection("users");
        const user = await collection.findOne({ username: req.username });
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
            return;
        }
        if (user.password !== req.password) {
            res.status(401).json({ success: false, message: "Invalid password" });
            return;
        }
        res.status(200).json({ success: true, message: "Login successful" });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export default LoginFunction;