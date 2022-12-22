import { Schema, Model, model } from 'mongoose'

const LogSchema: Schema = new Schema(
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

const LogModel = model('log', LogSchema);

export default LogModel