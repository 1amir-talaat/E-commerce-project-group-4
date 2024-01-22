import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const Register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    newUser.save();

    const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });
    res.status(200).json({
      token: token,
      msg: "Registration Successful",
      user: { first_name: newUser.dataValues.first_name, last_name: newUser.dataValues.last_name, email: newUser.dataValues.email },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (matchedPassword) {
      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });

      res
        .status(200)
        .json({ token: token, msg: "Login Successful", user: { first_name: user.first_name, last_name: user.last_name, email: user.email } });
    } else {
      res.status(401).json({ error: "Login Failed" });
    }
  } catch (error) {
    console.error("Error during Login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
