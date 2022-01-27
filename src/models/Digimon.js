const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('digimon', {
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
        color: {
            type: DataTypes.STRING
        }       
    })
}

// 123123kjadkjasdas0
// 123123kjadkjasda132132