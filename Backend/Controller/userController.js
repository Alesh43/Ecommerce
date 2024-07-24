const UserModel = require("../Model/userModel");

exports.CreateUser = async (req,res) => {
    const checkEmail = await UserModel.findOne({email:req.body.email});
    const checkContact = await UserModel.findOne({'userDetail.phoneNumber':req.body.phoneNumber});

    if(checkContact){
        return res.status(400).json({error:"Contact already exist"})
    }

    if(checkEmail) {
        return res.status(400).json({error: "Email already exist"})
    } else{

    const createUser = await new UserModel({
        email: req.body.email,
        password: req.body.password,
        'userDetail.firstName': req.body.firstName,
        'userDetail.middleName': req.body.middleName,
        'userDetail.lastName': req.body.lastName,
        'userDetail.phoneNumber': req.body.phoneNumber,
    })

    const saveUser = await createUser.save();
    if(!saveUser){
        return res.status(400).json({error:"User registration failed"});
    }else{
        return res.status(200).json({message: "User registration successful"})
    }
    }
}

exports.getAllUser = async (req,res) => {
    const users = await UserModel.find();
    if(!users) {
        return res.status(400).json ({message: "Users not found"})
    }
    return res.send(users)
}

exports .updateUser = async (req,res) =>{
    const updateUser = await UserModel.findByIdAndUpdate(req.params.id,{
        'userDetail.firstName': req.body.firstName,
        'userDetail.middleName': req.body.middleName,
        'userDetail.lastName': req.body.lastName,
        'userDetail.gender': req.body.gender,
        'userDetail.address': req.body.address
    })

    if(!update){
        return res.json({message:"Not found"}).status(400);
    }
    res.send(update);
}