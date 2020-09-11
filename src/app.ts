/**
 * 
 *  Bananasplit-js for Express
 *  @module .
 * 
 *  @description All begins here
 * 
 */
import { Stack } from './providers/bootstrap'
import { express, apollo } from './services'


const services = Stack([
    express,
    apollo
])

services.serve()
