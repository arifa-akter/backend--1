const router = require('express').Router();
const {addUser,
    getAllUsers,
    singleUser,
    updateUsers,
    userDelete}= require('../controllers/users')
// const{isAuth} = require('../middlewares/authentication')
const{addUserValidation ,updateUserValidation} = require('../validators/users')

/*ei validationResult amk ekta object dibe jodi object empty hoy tahole shamne orthat 
addUser jabe ar jodi object property empty na hoy thake tahole like {name:"rhtehf" email:"haju bajui"}
 tahole validation problem tai shamne addUser jabe na */ 

const validationResult = require('../validators')
router.post('/',addUserValidation,validationResult, addUser)
router.get('/',  getAllUsers)
router.get('/:id',singleUser)
router.patch('/:id',updateUserValidation ,validationResult,updateUsers)
router.delete('/:id',userDelete)

module.exports = router;