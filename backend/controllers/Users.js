import { getAllUser, addUser, getUserEmail, updateRefreshToken, getUserToken, deleteRefreshToken } from "../config/Database.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUser();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    await addUser(firstName, lastName, email, password);
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    let user = await getUserEmail(req.body.email);
    user = user[0];
    if (req.body.password != user.password) return res.status(400).json({ msg: "Wrong Password" });
    const userId = user.id;
    const name = user.name;
    const email = user.email;
    const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15s",
    });
    const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    await updateRefreshToken(refreshToken, userId);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Email not found" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await getUserToken(refreshToken);
  if (!user) return res.sendStatus(204);
  const userId = user.id;
  await deleteRefreshToken(userId, refreshToken);
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
