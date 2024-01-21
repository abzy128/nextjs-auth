import bcrypt from "bcrypt";
import { users } from "./mongo";
export default async function handler(req, res) {
  if (req.method === "POST") {
    var email = req.body.email;
    var password = req.body.password;
    if (email === "" || password === "") {
      res.status(400).json({ text: "Email and password are required!" });
      return;
    }
    password = await bcrypt.hash(password, 10);
    const user = await users.findOne({ email: email});
    if(user === null) {
      users.insertOne({ email: email, password: password });
      res.status(200).json({ text: "Registration successful!" });
    }else{
      res.status(400).json({ text: "Email already exists!" });
    }
  } else {
    res.status(400).json({ text: "Only POST method is allowed!" });
  }
}
