const UserModel = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const sendEmail = require("../utils/sendEmail");

exports.CreateUser = async (req, res) => {
  sendEmail();
  // const checkEmail = await UserModel.findOne({ email: req.body.email });
  // const checkContact = await UserModel.findOne({
  //   "userDetail.phoneNumber": req.body.phoneNumber,
  // });

  // if (checkContact) {
  //   return res.status(400).json({ error: "Contact already exist" });
  // }

  // if (checkEmail) {
  //   return res.status(400).json({ error: "Email already exist" });
  // } else {
  //   const hashPassword = await bcrypt.hash(req.body.password, 10);
  //   const createUser = await new UserModel({
  //     email: req.body.email,
  //     password: hashPassword,
  //     "userDetail.firstName": req.body.firstName,
  //     "userDetail.middleName": req.body.middleName,
  //     "userDetail.lastName": req.body.lastName,
  //     "userDetail.phoneNumber": req.body.phoneNumber,
  //   });

  //   const saveUser = await createUser.save();
  //   if (!saveUser) {
  //     return res.status(400).json({ error: "User registration failed" });
  //   } else {
  //     return res.status(200).json({ message: "User registration successful" });
  //   }
  // }
};

exports.getAllUser = async (req, res) => {
  const users = await UserModel.find();
  if (!users) {
    return res.status(400).json({ message: "Users not found" });
  }
  return res.send(users);
};

exports.updateUser = async (req, res) => {
  const updateUser = await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      "userDetail.firstName": req.body.firstName,
      "userDetail.middleName": req.body.middleName,
      "userDetail.lastName": req.body.lastName,
      "userDetail.gender": req.body.gender,
      "userDetail.address": req.body.address,
    },
    { new: true }
  );

  if (!updateUser) {
    return res.json({ message: "Not found" }).status(400);
  }
  res.send(updateUser);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await UserModel.findOne({ email: email });

  if (!checkUser) {
    return res.json({ error: "User not found" }).status(400);
  }
  const checkPassword = await bcrypt.compare(password, checkUser.password);

  const accessToken = await jwt.sign(
    {
      name: checkUser.userDetail.firstName,
      id: checkUser._id,
      email: checkUser.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  if (!checkPassword) {
    return res.json({ error: "Password is invalid" }.status(400));
  }
  return res
    .json({
      message: "Login is successfull",
      accessToken: accessToken,
      user: checkUser,
    })
    .status(201);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id" });
  }

  const user = await UserModel.findOne({ _id: id });

  if (!user) {
    return res.json({ error: "User not found" }).status(400);
  }
  return res.json({ user: user }).status(200);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id" });
  }

  const user = await UserModel.findByIdAndDelete(id);

  if (!user) {
    return res.json({ error: "User not found" }).status(400);
  }

  return res.json({ message: "Account deactivated" }).status(200);
};