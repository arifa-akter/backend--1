const Products = require('../models/Products')
// post product in mongodb
exports.addProduct =async(req ,res)=>{
    // res.json({message:"all another pull product update"})
    try{
    const newProducts = new Products(req.body)
    await newProducts.save()
    // console.log(req.body)
    res.status(200).json({message:'product add successfully'})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'error please try again'})
    }
}
// get product 
exports.getAllProduct =async(req ,res)=>{
    try{
    const allProducts = await Products.find()
    // await allProducts.save()
    res.status(200).json(allProducts)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'error please try again'})
    }
}
exports.singleProduct =async(req ,res)=>{
    try{
    // const singleProduct = await Products.findOne({productName:req.params.productName})
    console.log(req.params)
    const singleProduct = await Products.findById(req.params.id)

    res.status(200).json(singleProduct)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'error please try again'})
    }
}
// update product
exports.updateProduct =async(req ,res)=>{
    try{
     const {productName,description , price ,quantity} = req.body
     const updateProduct = await Products.findById(req.params.id)
     if(!updateProduct){
        return res.status(404).json({message : 'product not found'})
     }
     updateProduct.productName =productName? productName:updateProduct.productName
     updateProduct.description =description? description:updateProduct.description
     updateProduct.price =price?price:updateProduct.price
     updateProduct.quantity =quantity?quantity: updateProduct.quantity
     await updateProduct.save()
    res.status(200).json({message:'product update successfully'})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'error please try again'})
    }
}

// delete product
exports.deleteProduct =async(req ,res)=>{
    try{
    // const singleProduct = await Products.findOne()
    console.log(req.params)
    await Products.findByIdAndDelete(req.params.id)
    res.status(200).json({message:'delete product successfully'})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'error please try again'})
    }
}

// module.exports = {getProduct}