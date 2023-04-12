import express from "express";
import userRouter from "./routes/user.routes";
import routerCrypto from "./routes/cryptomonedas.routes";
import routerCryptoUser from "./routes/crypto_user.routes";

const app = express();
app.use(express.json());
var cors = require("cors")
app.use(cors())

const PORT = 9000;
app.use("/api/cryptomonedas", routerCrypto)
app.use("/api/users", userRouter);
app.use("/api/cryptouser", routerCryptoUser);
app.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto ${PORT}`);
});
