// Model Cliente
// Um model é uma representação de uma entidade do sistema (tabela)

// Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";

// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

const Pedido = connection.define('pedidos', {
    // Atributos da tabela 'clientes'
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

Pedido.sync({force: false})

export default Pedido;