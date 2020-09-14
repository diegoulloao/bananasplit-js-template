/**
 * 
 *  Controller
 *  @controller
 *  @module app/controllers/example
 * 
 *  @description * you can remove or modify this *
 * 
 */
import { Request, Response } from 'express'
import { Sequelize } from '../../providers'


/**
 * 
 *  @models @import
 *  Your model import goes here
 * 
 */
import User from '../models/user'


export default
    /**
     * 
     *  @class Controller
     *  @classdesc an controller example
     * 
     */
    class Controller {

        /**
         *      Hello response @handler
         */
        public static hello( request: Request, response: Response ) {

            return response.status( 200 ).send( 'GET 200 / Hello' )
            
        }


        /**
         *      Database connection test @handler
         */
        public static async databaseConnectionTest( request: Request, response: Response ) {

            try {
                await Sequelize.authenticate()
                response.status( 200 ).send( 'Connection has been established successfully.' )

            } catch(e) {
                response.status( 500 ).send( `Unable to connect to the database: ${e}` )
            }


            return response

        }


        /**
         *      Database query test @handler
         */
        public static async databaseQueryTest( request: Request, response: Response ) {

            try {
                const [ result ] = await Sequelize.query( "SELECT 'Hello from database!' as result" )
                response.status( 200 ).send( result )

            } catch(e) {
                response.status( 500 ).send( `Unable to connect to the database: ${e}` )
            }


            return response

        }


        /**
         *      Sequelize ORM query test @handler
         */
        public static async getUsers( request: Request, response: Response ) {

            try {
                const result = await User.findAll()
                response.status( 200 ).send( result )

            } catch(e) {
                response.status( 500 ).send( e )
            }


            return response

        }

    }
;
