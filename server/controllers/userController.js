import validator from "validator";
import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

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

export const login = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(400).json({ message: 'All fields are required.' });
      }

      const user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ message: "Incorrect email or password" });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
         return res.status(400).json({ message: "Incorrect email or password" });
      }

      const token = generateToken(user._id);
      res.cookie('token', token, {
         httpOnly: true,
         sameSite: 'None',
         secure: true,
         maxAge: 7 * 24 * 60 * 60 * 1000
      });

      res.status(200).json({
         message: "Logged in successful.",
         user: {
            id: user._id,
            name: user.name,
            email: user.email,
         }
      });
   } catch (error) {
      res.status(500).json({ message: "Internal server error.", error: error.message });
   }
}

export const profile = async (req, res) => {
   try {
      res.status(200).json(req.user);
   } catch (error) {
      res.status(500).json({ message: "Internal server error.", error: error.message });
   }
}

export const logout = async (req, res) => {
   res.clearCookie('token', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
   });

   res.status(200).json({ message: "Logged out successfully." });
}