import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from './index';

  class SequelizeMedicine extends Model<InferAttributes<SequelizeMedicine>, 
  InferCreationAttributes<SequelizeMedicine>> {
    declare id: CreationOptional<number>; 

    declare name: string;

    declare activePrinciple: string; 

    declare composition: string;

    declare presentation: string; 

    declare use: string; 

    declare drugInteractions: string; 
  }

  SequelizeMedicine.init({
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
        type: DataTypes.STRING, 
        allowNull: false,
    },
    presentation: {
        type: DataTypes.STRING, 
        allowNull: false, 
    },
    use: {
        type: DataTypes.STRING, 
        allowNull: false, 
    },
    drugInteractions: {
        type: DataTypes.STRING, 
        allowNull: false, 
        field: 'drug_interactions',
    },
    }, {
        sequelize: db, 
        modelName: 'SequelizeMedicine', 
        timestamps: false, 
        tableName: 'medicines',
  });

  export default SequelizeMedicine;