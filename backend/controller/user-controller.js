const User = require("../models/User");
const bcrypt = require("bcrypt");

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

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

}