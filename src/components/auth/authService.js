const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const authSchemas = require('./authSchema');
const authModel = require('./authModel');
const bcrypt = require('bcryptjs');

const ajv = new Ajv();
addFormats(ajv);

exports.checkLogIFormat = (reqBody) => {
    if (!ajv.validate(authSchemas.logInSchema, reqBody)) {
        return false;
    }
    return true;
};

exports.checkSignUpFormat = (reqBody) => {
    if (!ajv.validate(authSchemas.signUpSchema, reqBody)) {
        return false;
    }
    return true;
};

exports.isExistedAccount = async (email) => {
    console.log("check existed");
    const exist = await authModel.findOne({ userEmail: email });
    console.log("Exist: " + exist);
    if (exist) {
        return true;
    } else {
        return false;
    }
};

exports.register = async (reqBody) => {
    const salt = await bcrypt.genSalt(10);
    console.log(reqBody);
    const hashPassword = await bcrypt.hash(reqBody.userPassword, salt);
    const newUser = {
        userName: reqBody.userName,
        userEmail: reqBody.userEmail,
        userPassword: hashPassword,
        userPhoneNumber: '',
        userAddress: ''
    }
    // call query insert new user into database
    const result = await authModel.insertMany(newUser);
    console.log("Add new user successfully");
};


exports.signIn = async (inputEmail, inputPassword) => {
    const user = await authModel.findOne({ userEmail: inputEmail });
    console.log(user);
    if (!user || user.length == 0) {
        return null;
    }
    else if (await bcrypt.compare(inputPassword, user.userPassword)) {
        return user;
    }
    else {
        return null;
    }
};

// exports.emailExists =(email)=> {

// }
