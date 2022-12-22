import mongoose  from 'mongoose'

const dbConnector = async () => {
    await mongoose.connect('mongodb+srv://werich01:Msklg2022@musikologi.0e3mj.mongodb.net/?retryWrites=true&w=majority').then(db => {
        console.log('connect')
    }).catch(error => console.log(error))

}

export default dbConnector

