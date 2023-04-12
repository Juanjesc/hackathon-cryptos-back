import { userController } from "./../controllers/user.controller";
import express from "express";

const router = express.Router();

router.post("/add", userController.addUser);
router.get("/all", userController.getAllUsers);
router.get("/get/:id", userController.getUserById);
router.get("/get/infoUser/:id", userController.getUserInfoHeaderById);
router.post("/login", userController.getLogin);
router.post("/update/deposit", userController.updateDeposit)

export default router;
module.exports = router;