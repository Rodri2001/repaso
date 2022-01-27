const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('episode', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING
        }       
    })
}