// Model Cliente
// Um model é uma representação de uma entidade do sistema (tabela)

//  Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";

// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

const Produto = connection.define('produtos', {
    // Atributos da tabela 'produto'
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Produto.sync({force: false})

export default Produto;