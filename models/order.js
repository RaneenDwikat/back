var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var orderSchema = new Schema({
    clientname: {
        type: String,
        require: true
    },
    category:{
        type:String,
        require: true
    },
    service:{
        type:String,
        require: true
    },
    time:{
        type:Array,
        require: true
    },
    address:{
        type:Array,
        require: true
    },
    description:{
        type:String,
    }
})
module.exports = mongoose.model('Order', orderSchema)