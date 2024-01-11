import {perros} from "../modelos/dogModelo.js";

const crear = (req,res)=>{
    if(!req.body.nombre){
        res.status(400).json({

            mensaje: "Nombre del perro no debe estar vacio"
        });
        return;
    }
    const dataset={
        nombre: req.body.nombre,
        edad: req.body.edad,
        razar: req.body.razar,
    };

    dog.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje:"Registro del Perro creado Exitosamente"
        })
    }).catch((err)=>{
        res.status(500).json({
            tipo:"error",
           mensaje: `Error al crear el registro del Perro ::: ${err}`
        })       
    })
};

const buscarId =(req,res)=>{
    const id = req.params.id;
    if(id==null){
        res.status(203).json({
            mensaje:  `El id esta vacio`
        });
        return
    }

    dog.findByPk(id).then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje:  `Registro del Perro no se encontro ::: ${err}`
        });
    });
}

const buscar = (req,res)=>{
    dog.findAll().then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje:  `No se econtraron resgistro del perro ::: ${err}`
        });
    });
};

const actualizar =(req,res)=>{
    const id= req.params.id;
    if(!req.body.nombre && !req.body.edad && !req.body.razar){
        res.status(500).json({
            mensaje:  `no se ecuentraron Datos del Perro para actualizar`
        });
        return;
    }
    else{
        const nombre= req.body.nombre;
        const edad=req.body.edad;
        const razar=req.body.razar
        dog.update({nombre,edad,razar},{where:{id}})
        .then((resultado)=>{
            res.status(200).json({
                tipo:"success",
                mensaje: `Registro Actualizado del Perro`
            });
        })
        .catch((err)=>{
            res.status(500).json({
                tipo:"error",
                mensaje:  `error a actualizar registro del perro::: ${err}`
            });
        })    
    }
};

const eliminar=(req,res)=>{
    const id= req.params.id;
    if(id == null){
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }
    dog.destroy({where:{id}})
    .then((resultado)=>{
        res.status(200).json({
            tipo:"error",
            mensaje: `Registro del Perro eliminado`
        });
    })
    .catch((err)=>{
        res.status(500).json({
            mensaje: `Error al eliminar Registro el registro del perro ::: ${err}`
        });
    })
    

};

export {crear,buscarId,buscar,actualizar,eliminar}