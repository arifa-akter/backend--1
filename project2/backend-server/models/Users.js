const {Schema , model} = require('mongoose');

const userSchema = Schema({
    name:{type:String , require:true},
    email:{type:String , require:true , unique:true},
    age:Number,
    address:{type:String}
})

module.exports = model('user' , userSchema)