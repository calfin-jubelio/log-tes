import mongoose from 'mongoose'

const LogSchema = new mongoose.Schema(
    {
        uuid: {type:String},
        status: {type:String},
        service: {type:String},
        username: {type:String},
        activity: {type:String},
        request: {type:Object},
        response: {type:Object},
        log_date: {type:Date},
    },

)

const LogModel = mongoose.model('log', LogSchema);

export default LogModel