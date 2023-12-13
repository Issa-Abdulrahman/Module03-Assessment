import { DataTypes, Model, Sequelize } from 'sequelize';


export default (Sequelize, DataTypes) => {
    class User extends Model{
        static associate(models){

        }
    }
    User.init(
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            created_at:{
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false,
            },
            created_at:{
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false,
            },
        },
        {
            Sequelize,
            modelName: 'user',
            timestamps: true,
        }
    );

    return User;
};

