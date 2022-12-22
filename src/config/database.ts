import mongoose  from 'mongoose'
import dotenv  from 'dotenv'
dotenv.config()

const dbConnector = async () => {
    await mongoose.connect(`mongodb://localhost:27017/property`).then(db => {
        console.log('connect')
    }).catch(error => console.log(error))

}

export default dbConnector

