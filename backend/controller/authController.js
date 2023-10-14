const { generateHashPassword, compareHashPassword, authToken } = require("../common/helper");
const { createUserInstance, getUserInstance } = require("../dao/userDao");

const registerUserController = async (req,res) => {
    try {
        try {
            const {email,password} = req.body
            const existingEmail = await getUserInstance({email})
            if(existingEmail){
                res.status(404).json({message:"Email already exists"})
            }
            req.body.password = await generateHashPassword(password)
            const userData = await createUserInstance(req.body)
            if (userData) {
              res.status(200).json(userData);
            }
          } catch (err) {
            console.log(err);
          }
    } catch (error) {
        console.log(error)
    }
}

const loginUserController = async (req,res) =>{
    try {
        const { email, password } = req.body;
        const findEmail = await getUserInstance({email})
        if (findEmail) {
          const checkPassword = await compareHashPassword(password,findEmail.password);
          if (checkPassword) {
            const token = await authToken(findEmail._id)
            res.status(200).json({message:"Login Successful",token});
          } else {
            res.status(400).json({ message: "email/password incorrect" });
          }
        } else {
          res.status(404).json({ message: "email/password incorrect" });
        }
      } catch (error) {
        console.log(error);
      }
}

module.exports = {
    registerUserController,
    loginUserController
}