/**
 * 
 *  Resolvers for Apollo GraphQL Server
 *  @resolvers
 * 
 *  @module graphql/main.resolvers
 *  @description Registers all GraphQL resolvers
 * 
 */


 /**
 *
 *  @import @resolvers
 *  Your Resolvers import goes here.
 * 
 */
import HelloResolvers from './resolvers/hello.resolvers'


export default [
    
    /**
     *
     *  @registry @resolvers
     *  Your Resolvers registry goes here.
     * 
     */
    HelloResolvers

]
