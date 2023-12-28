import bcrypt from "bcrypt";
import { users } from "./mongo";
import { NextResponse } from "next/server";
export default async function handler(req, res) {
  if (req.method === "POST") {
    var email = req.body.email;
    var password = req.body.password;
    if (email === "" || password === "") {
      res.status(400).json({ text: "Email and password are required!" });
      return;
    }
    password = await bcrypt.hash(password, 10);
    users.findOne({ email: email, password: password }, function (err, user) {
      if (err) {
        console.err(err);
        res.status(500).json({ text: "Internal error!" });
      }
      if (user) {
        res.status(200).json({ text: "Login successful!" });
      } else {
        res.status(400).json({ text: "Email or password is incorrect!" });
      }
    });
  } else {
    res.status(400).json({ text: "Only POST method is allowed!" });
  }
}