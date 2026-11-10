import {  DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection.js'

class Turma extends Model {}

Turma.init(
  {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    curso: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  },
  {
    
    sequelize, 
    modelName: 'Turma' 
  },
);

export default Turma;