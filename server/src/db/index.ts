import { Mongoose, connect } from 'mongoose'
import { TransactionModel } from './models/transactions'

const mongoConnectionURL= 'mongodb+srv://lsw:DCZN5iHagJvku6Q@sage.hkg0y.mongodb.net/sagedb?retryWrites=true&w=majority'

const mongoose = async (): Promise<Mongoose | void> => {

    try{
        let mongoose= await connect(mongoConnectionURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        return mongoose
    }
    catch (error){
        console.log('Error connecting to Mongo Atlas: '+error)
        return
    }

    
}

export {
    mongoose,
    TransactionModel
}