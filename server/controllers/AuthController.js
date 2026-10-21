class AuthController{

    static register =(req,res)=>{
        try{
            res.send(req.body)
        }
        catch(error){
            console.log(error)

        }
    }

}

module.exports = AuthController