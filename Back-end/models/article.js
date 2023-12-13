import { DataTypes, Model, Sequelize } from 'sequelize';

export default (Sequelize, DataTypes) => {
    class User extends Model{
        static associate(models){

        }
    }

    Article.int(
        {
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              title: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              category: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              author: {
                type: DataTypes.STRING,
                allowNull: false,
              },
        },
        {
            Sequelize,
            modelName: 'user',
            timestamps: true,
        }
    );
    return Article;
};