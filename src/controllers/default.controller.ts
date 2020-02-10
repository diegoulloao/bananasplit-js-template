/**
 * 
 *  Default Controller
 * 
 *  @module controllers/default.controller
 *  @description Provides default actions
 * 
 */


import { Request, Response } from 'express'


export default
    /**
     * 
     *  @class Controller
     *  @classdesc Provides default handlers
     * 
     */
    class Controller {
        /**
         * 
         *  Hello root path response
         * 
         *  @param { Request } request 
         *  @param { Response } response
         * 
         *  @returns { Response }
         * 
         */
        public static hello( request: Request, response: Response ): Response {
            return response.send( '<h2> Hello from Express! </h2> <strong> GET / </strong> 200 Response' )
        }
    }
;
