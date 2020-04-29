/**
 * 
 *  Database Config file
 *  @config
 * 
 *  @description Contains all database configurations
 * 
 */


 
import Sequelize from 'sequelize'
import DBAuth from '../providers/interfaces/database.auth'
import dotenv from 'dotenv'



dotenv.config()



/**
 * 
 *  @options
 *  Sequelize app options
 * 
 */
const SequelizeOptions: Sequelize.Options = {

    /**
     * 
     *  Dialect possibilities:
     *  'mysql' | 'mariadb' | 'postgres' | 'mssql' | 'sqlite'
     * 
     */
    dialect: 'mysql',

    host: <string> process.env.HOST,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

}


/**
 * 
 *  @auth
 *  DB app authentication
 * 
 */
const DBAuth: DBAuth | string =  {
    
    database: <string> process.env.DB_DATABASE,
    username: <string> process.env.DB_USERNAME,
    password: <string> process.env.DB_PASSWORD

}


export { DBAuth, SequelizeOptions }
