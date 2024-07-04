import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from './index';

  class SequelizeMedicamento extends Model<InferAttributes<SequelizeMedicamento>, InferCreationAttributes<SequelizeMedicamento>> {
    declare id: CreationOptional<number>; 

    declare nome: string;

    declare principioAtivo: string; 

    declare apresentacao: string; 

    declare uso: string; 

    declare interacoesMedicamentosas: string; 
  }

  SequelizeMedicamento.init({
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
    }, 
    apresentacao: {
        type: DataTypes.STRING, 
        allowNull: false, 
    },
    uso: {
        type: DataTypes.STRING, 
        allowNull: false, 
    },
    interacoesMedicamentosas: {
        type: DataTypes.STRING, 
        allowNull: false, 
    }
    }, {
        sequelize: db, 
        modelName: 'medicamentos', 
        timestamps: false, 
        tableName: 'medicamentos',
  });

  export default SequelizeMedicamento;