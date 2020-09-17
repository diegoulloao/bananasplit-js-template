/**
 * 
 *  Providers: Helpers
 *  @module providers/helpers
 * 
 *  @description Contains helpers used in providers
 * 
 */
import chalk from 'chalk'
import boxen from 'boxen'


/**
 * 
 *  Services log
 *  @description print to console services status
 * 
 *  @param { string } output - content to print
 *  @returns { void }
 * 
 */
export const servicesLog = ( output: string ): void => {

    let message: string[] = [

        `${ chalk.yellow('Serving!') }\n\n`,
        `${ output }\n\n`,
        `${ chalk.grey(`${process.env.NODE_ENV!.toUpperCase()} MODE`) }`

    ]

    
    console.log(

        boxen( message.join(''), {
            padding: 1,
            margin: 1,
            borderColor: 'yellow'
        })
        
    )

}