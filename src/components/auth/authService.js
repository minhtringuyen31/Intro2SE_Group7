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
}

exports.checkSignUpFormat = (reqBody) => {
    if (!ajv.validate(authSchemas.signUpSchema, reqBody)) {
        return false;
    }
    return true;
}

exports.isExistedAccount = async (reqBody) => {
    const account = await authModel.findOne(reqBody.userEmail);
    if (!account) {
        return true;
    } else {
        return false;
    }
}

exports.register = async (reqBody) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(reqBody.userPassword, salt);

    // call query insert new user into database
    // const check = await 
}