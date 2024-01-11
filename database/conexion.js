import Sequelize from "sequelize";

const db = new Sequelize("adopciones","adopcionesk","adopcio452",{
    dialect: "mysql",
    host: "localhost"
});

export {db}