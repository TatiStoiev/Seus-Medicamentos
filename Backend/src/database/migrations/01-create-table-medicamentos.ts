import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMedicine } from '../../interfaces/IMedicine';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IMedicine>>('medicines', {
            id: {
                type: DataTypes.INTEGER, 
                allowNull: false, 
                autoIncrement: true,
                primaryKey: true,
            }, 
            name: {
                type: DataTypes.STRING, 
                allowNull: false, 
            }, 
            activePrinciple: {
                type: DataTypes.STRING, 
                allowNull: false, 
                field: 'active_principle',
            }, 
            composition: {
                type: DataTypes.TEXT, 
                allowNull: false,
            },
            presentation: {
                type: DataTypes.STRING, 
                allowNull: false, 
            },
            use: {
                type: DataTypes.TEXT, 
                allowNull: false, 
            },
            drugInteractions: {
                type: DataTypes.TEXT, 
                allowNull: false, 
                field: 'drug_interactions',
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('medicines')
    }
}