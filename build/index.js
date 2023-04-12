"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Almacenamos en una constante express
const app = (0, express_1.default)();
//De todo lo que tiene express, vamos a utilizar lo que es express.json, nos dará las respuestas en JSON
app.use(express_1.default.json());
const PORT = 9000;
app.get("/ping", (_req, res) => {
    console.log("Has hecho ping :D");
    const MESSAGE = "pong";
    res.send(MESSAGE);
});
//resquest es lo que recibimos (la petición) y response es lo que devolvemos, la respuesta
app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
});
