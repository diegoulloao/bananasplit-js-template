/**
 * 
 *  Migration for Users Table
 *  (generated with Sequelize-CLI)
 *  @seeder @db
 * 
 *  @description a migration example for User
 * 
 */

 

'use strict';


module.exports = {

    up: ( queryInterface, DataTypes ) => {

          return queryInterface.createTable( 'Users', {

            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
    
            name: {
                type: new DataTypes.STRING(30),
                allowNull: false
            },
    
            lastname: {
                type: new DataTypes.STRING(30),
                allowNull: false
            },
    
            email: {
                type: new DataTypes.STRING(50),
                allowNull: false
            },
    
            password: {
                type: new DataTypes.STRING(50),
                allowNull: false
            },

            
            // Timestamps
            createdAt: {
                type: 'TIMESTAMP',
                defaultValue: DataTypes.literal( 'CURRENT_TIMESTAMP' ),
                allowNull: false

            },

            updatedAt: {
                type: 'TIMESTAMP',
                defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
                allowNull: false

            }
            // End Timestamps
            
        } )

    },


    down: ( queryInterface, Sequelize ) => {
        return queryInterface.dropTable( 'Users' )
    }

}
