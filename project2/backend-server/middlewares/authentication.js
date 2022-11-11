const isAuth = (req , res , next)=>{
    console.log('hello')
    next()   
}
module.exports ={ isAuth}