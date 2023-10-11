const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt =  require('jsonwebtoken')
//register a user
exports.userSignup = async (req,res)=>{
    try{
        //generating random hashed string salt
        const salt = await bcrypt.genSalt(10);
        //adding salt to the password to make it unpredictable
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //creating user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        //saving data in db
        const user = await  newUser.save();
        res.status(200).json(user);

    }catch(err){
        res.status(500).json(err);
    }
}


// login user

exports.userLogin = async (req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
        return res.status(404).json("User not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(400).json("Wrong password");
        }
        else{
            const token = jwt.sign({_id: user._id, username : user.username}, process.env.JWT_SECRET,{
                expiresIn: "1d"
            });
        
                res.status(200).json({message: "login successful", token})
        }
    }catch(err){
        res.status(500).json(err);
    }

}

exports.userAuth = async(req,res)=>{
    const {token} = req.body
    if(token){
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            res.status(200).json({auth: true, data :decode})
        }
        catch(err){
            res.json({auth: false, data :err.message})
        }
    }else{
        res.json({
            auth : false,
            data: "No token provided"
        })
    }
}