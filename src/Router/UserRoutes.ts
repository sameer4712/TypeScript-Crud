import { Router } from "express";
import {
  AddUser,
  GetAllUser,
  updateUser,
  deleteUser,
} from "../controller/UserController.ts";

const router = Router();

router.get("/allusers", GetAllUser);
router.post("/addusers", AddUser);
router.put("/edituser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

export default router;
