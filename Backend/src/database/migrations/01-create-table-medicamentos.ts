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
            principio_ativo: {
                type: DataTypes.STRING, 
                allowNull: false, 
            }, 
            apresentacao: {
                type: DataTypes.STRING, 
                allowNull: false, 
            },
            uso: {
                type: DataTypes.STRING, 
                allowNull: false, 
            },
            interacoes_medicamentosas: {
                type: DataTypes.STRING, 
                allowNull: false, 
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('medicamentos')
    }
}