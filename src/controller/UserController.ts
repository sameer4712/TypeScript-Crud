import type { Request, Response } from "express";
import usermodel from "../Model/User.ts";


export const AddUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = await usermodel.insertOne({ name, email, age });
    return res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const GetAllUser = async (req: Request, res: Response) => {
  try {
    const users = await usermodel.find();
    res.json({message:"All users listed",users});
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const updatedUser = await usermodel.findByIdAndUpdate(
      id,
      { name, email, age },
      { new: true } 
    );

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.json({message:`Updated user is ${updateUser}`});
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Server error" });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteuser = await usermodel.findByIdAndDelete(id);

    if (!deleteuser)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: `User deleted successfully : username: ${deleteuser.name}` });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Server error" });
  }
};
