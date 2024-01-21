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
    const user = await users.findOne({ email: email});
    if(user ==null){
      res.status(400).json({ text: "User does not exist" });
    }
    if(bcrypt.compareSync(password, user.password)){
      res.status(200).json({ text: "Login successful!" });
    }else{
      res.status(400).json({ text: "Invalid password!" });
    }
  } else {
    res.status(400).json({ text: "Only POST method is allowed!" });
  }
}