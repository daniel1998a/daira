import  express from "express";
import { routerPerros } from "../rutas/dogRouter.js";
import { db } from "../database/conexion.js";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors());

db.authenticate().then(()=>{
    console.log(`Base de Datos conectada de manera exitosa`);
}).catch(err=>{
    console.log(`Error al conectarse a la Base de Datos ::: ${err}`);
})


app.get("/",(req,res)=>{
    res.send("dog");
});

app.use("/dog",routerPerros);

const PORT =8000;

db.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Servidor Inicializado en puerto ${PORT}`);
    } );
}).catch(err=>{
    console.log(`Error al sincronizar Base de Datos ${err}`);
});