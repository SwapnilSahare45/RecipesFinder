import validator from "validator";
import { User } from "../models/User.js";

export const register = async (req, res) => {
   try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
         return res.status(400).json({ message: "All fields are required." });
      }

      if (!validator.isEmail(email)) {
         return res.status(400).json({ message: "Invalid email format." });
      }

      if (!validator.isStrongPassword(password)) {
         return res.status(400).json({ message: "Password must be at least 8 characters, include upper & lower case letters, and numbers." });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
         return res.status(400).json({ message: "User already register." });
      }

      const newUser = await User.create({
         name,
         email,
         password,
      });

      res.status(201).json({
         message: "User registered successfully.",
         user: {
            name: newUser.name,
            email: newUser.email,
         }
      });

   } catch (error) {
      res.status(500).json({ message: "Internal server error.", error: error.message });
   }
}