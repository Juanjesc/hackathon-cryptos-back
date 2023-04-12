import { cryptomonedaController } from "../controllers/cryptomoneda.controller";
import express from "express";

const routerCrypto = express.Router();

routerCrypto.get("/all", cryptomonedaController.getAllCryptomonedas);
routerCrypto.get("/get/:asset", cryptomonedaController.getIdCryptoByAsset);
routerCrypto.post("/update/stock", cryptomonedaController.updateStock)


export default routerCrypto;
module.exports = routerCrypto;
