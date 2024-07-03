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

    declare principio_ativo: string; 

    declare apresentacao: string; 

    declare uso: string; 

    declare interacoes_medicamentosas: string; 
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
    }
    }, {
        sequelize: db, 
        modelName: 'medicamentos', 
        timestamps: false, 
        tableName: 'medicamentos'
  });

  export default SequelizeMedicamento;