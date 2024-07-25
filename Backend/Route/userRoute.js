const express = require("express");

const {CreateUser, getAllUser, updateUser,verifyJWT, login} = require("../Controller/userController");

const router = express.Router();

router.post('/register', CreateUser);
router.get('/users', getAllUser);
router.put('/update-user/:id',verifyJWT,updateUser);
router.post('/login',login)

module.exports = router;