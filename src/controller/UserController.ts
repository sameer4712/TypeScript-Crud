import type { User } from "../Model/User";
import type { Request, Response } from "express";

let users: User[] = [];
let nextid = 1;

export const AddUser = (req:Request,res:Response)=>{
    try{
      const {name,email,age}=req.body;
      if(!name || !email){
        return res.json("name and email is required")
      }
      const newuser : User={
        id: nextid++,
        name,
        email,
        age
      }
      users.push(newuser)
      return res.json(newuser)
    }
    catch(err){
      console.log(err)
    }
}


export const GetAllUser = (req: Request,res:Response)=>{
  console.log('reacherd')
  try{
    res.json(users)
  }
  catch(err){
    console.log(err);
    
  }
}


export const updateUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const { name, email } = req.body;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });

  if (name) user.name = name;
  if (email) user.email = email;
  res.json(`updated user is ${name}`);
};

export const deleteUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const beforeCount = users.length;
  users = users.filter(u => u.id !== id);

  if (users.length === beforeCount)
    return res.status(404).json({ message: "User not found" });

  res.status(204).send(`deleted user is ${users}`);
};

