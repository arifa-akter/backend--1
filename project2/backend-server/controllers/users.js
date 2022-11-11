const Users = require('../models/Users')
exports.addUser = async(req ,res)=>{
   try{
    const insertUsers = new Users(req.body)
    await insertUsers.save()
    res.status(200).json({message:'add user'})

   }
   catch(error){
    console.log(error)
    res.status(500).json({message:`please try again${error}`})
   }
}
exports.getAllUsers = async(req ,res)=>{
   try{
    const getAllUsers = await Users.find()
    res.status(200).json(getAllUsers)

   }
   catch(error){
    console.log(error)
    res.status(500).json({message:`please try again`})
   }
}
exports.singleUser = async(req ,res)=>{
   try{
    const getSingleUser = await Users.findById(req.params.id)
    res.status(200).json(getSingleUser)

   }
   catch(error){
    console.log(error)
    res.status(500).json({message:`please try again`})
   }
}

exports.updateUsers = async(req ,res)=>{
    try{
     const {name , email, age, address} =req.body
     const updateUser= await Users.findById(req.params.id)
     if(!updateUser){
        return res.status(400).json({message:'user not found'})
     }
     updateUser.name= name? name:updateUser.name
     updateUser.email= email? email:updateUser.email
     updateUser.age= age? age:updateUser.age
     updateUser.address= address? address:updateUser.address
     await updateUser.save()
     res.status(200).json({message:'user update successfully'})
    }
    catch(error){
     console.log(error)
     res.status(500).json({message:`please try again`})
    }
 }

 exports.userDelete =async(req ,res)=>{
    try{
    await Users.findByIdAndDelete(req.params.id)
     res.status(200).json({message:'delete user successfully'})
 
    }
    catch(error){
     console.log(error)
     res.status(500).json({message:`please try again`})
    }
 }


