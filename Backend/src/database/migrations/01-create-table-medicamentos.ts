import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMedicamento } from '../../interfaces/IMedicamento';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IMedicamento>>('medicamentos', {
            id: {
                type: DataTypes.INTEGER, 
                allowNull: false, 
                autoIncrement: true,
                primaryKey: true,
            }, 
            nome: {
                type: DataTypes.STRING, 
                allowNull: false, 
            }, 
            principioAtivo: {
                type: DataTypes.STRING, 
                allowNull: false, 
                field: 'principio_ativo'
            }, 
            apresentacao: {
                type: DataTypes.STRING, 
                allowNull: false, 
            },
            uso: {
                type: DataTypes.TEXT, 
                allowNull: false, 
            },
            interacoesMedicamentosas: {
                type: DataTypes.TEXT, 
                allowNull: false, 
                field: 'interacoes_medicamentosas'
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('medicamentos')
    }
}