import Sequelize from "sequelize";

const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '', // Sem senha
    database: 'loja', // Banco de dados usado
    timezone: "-03:00",

})

export default connection