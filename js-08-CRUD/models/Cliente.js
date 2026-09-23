// Model Cliente
// Um model é uma representação de uma entidade do sistema (tabela)

// Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";

// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

// O método define() define uma estrutura de uma tabela no banco
const Cliente = connection.define('clientes', {
    // Atributos da tabela 'clientes'
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CPF:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

// O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
// {force: false} faz que ele não fique recriando a tabela toda vez, apenas fazendo isso na primeira vez, ou seja, somente se não existir
Cliente.sync({force: false})

// Exportar o módulo criado
export default Cliente;