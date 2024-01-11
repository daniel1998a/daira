import express from "express";
import {crear,buscarId,buscar,actualizar,eliminar} from "../controladores/dogController.js";
const routerDog = express.Router();

routerDog.get("/",(req,res) =>{
    res.send("Bienvenido a lista de Perro");
})
;
routerDog.post("/crear",(req,res) =>{
    crear(req,res)
});

routerDog.get("/buscar/:id",(req,res)=>{
    buscarId(req,res)
});

routerDog.get("/buscar",(req,res)=>{
    buscar(req,res)
});

routerDog.put("/actualizar/:id",(req,res) =>{
    actualizar(req,res);
});

routerDog.delete("/eliminar/:id",(req,res) =>{
 
    eliminar(req,res);
});

export {routerDog};