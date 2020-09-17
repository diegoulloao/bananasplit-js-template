/**
 * 
 *  Apollo: Customize
 *  @module graphql/custom/graphql
 * 
 *  @description allow to manipulate the graphql schema as you want. Returns an options object that is passed directly to the ApolloServer constructor
 * 
 */
import { GraphQLSchema } from 'graphql'


export default

    ( schema: GraphQLSchema ): object => {

        // You can customize the schema object here ---------------



        // End ----------------------------------------------------


        const options: object = {

            /**
             * 
             *  @options
             *  Your apollo options goes here
             * 
             */
            schema,
            context: {},

        }
        

        return options

    }

;