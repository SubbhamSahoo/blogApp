const validationRequest = (schema) => {
    return (req,res,next) => {
        const {error} = schema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
                //message:error.details.map((detail)=>detail.message)
            })
        }
        next()
    }
}

module.exports = validationRequest