import Sequelize  from "sequelize";
import { db } from "../database/conexion.js";

const dog = db.define("dog",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    razar:{
        type: Sequelize.STRING,
        allowNull: true
    },
    
});

export {dog}