import { cryptoUserController } from "../controllers/crypto_user.controller";
import express from "express";

const routerCryptoUser = express.Router();


routerCryptoUser.post("/update", cryptoUserController.updateCryptos)
routerCryptoUser.get("/get/:userId/:cryptoId", cryptoUserController.getCryptouserByIdAndCryptoId)
export default routerCryptoUser;
module.exports = routerCryptoUser;
