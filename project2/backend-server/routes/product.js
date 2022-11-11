// get post patch/put  delete
// 
const router = require('express').Router();
const {addProduct ,
    getAllProduct,
    singleProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product')
router.post('/' , addProduct)
router.get('/' , getAllProduct)
router.get('/:id' , singleProduct)
router.patch('/:id' , updateProduct)
router.delete('/:id' ,deleteProduct)
module.exports = router;