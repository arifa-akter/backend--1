const { check, checkSchema } = require('express-validator');
// // check-> body te ja thakbe sob gular validation kora jabe
// // param-> id dia jegula pabo sai gulor validation korbe

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
exports.addUserValidation = [
    // jodi notEmpty true hoy mane email na thakle .withMessage dibe
    // jodi notEmpty false hole tar mane email ache kno .with message dibe na
    // if isEmail is true then message does not execute 
    // if isEmail is false then message is execute
    check('name').trim().notEmpty().withMessage("name is require")
    .custom(async(name)=>{
       if(name.length<3){
        throw 'name must be 3 character long'
       }
    }),
    check('email').isLowercase().isEmail().withMessage("email in valid")
]
exports.updateUserValidation = [

    check('name')
    .custom(async(name)=>{
      if(name){
        if(name.length<3){
            throw 'name must be 3 character long'
           }
      }
    }),

    check('email').custom(async(email)=> {

       
         if (email){
            if(regex.test(email)){
                throw 'email is invalid'
            }
        
         }

    }),
    check('age').custom(async(age)=>{
        // jodi number hoy tahole false dibe ar jodi 25a hoy true hobe 
        if(age){
            if(isNaN(age)){
                throw 'Age must be a numeric value';
            }
        }

    })
]