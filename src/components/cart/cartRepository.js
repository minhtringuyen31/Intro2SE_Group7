const connection = require('../connect_DB');
const START_STATUS = 'exercuting';

exports.checkExistProduct = async (userEmail, idProduct) => {
    try {
        const poolPromise = connection.promise();
        const res = await poolPromise.query('SELECT PC.QUANTITY FROM PRODUCT_CART PC WHERE PC.USER_EMAIL = ? AND PC.PRODUCT_ID = ? LIMIT 1', [userEmail, idProduct], function (err) {
            if (err) {
                return null;
            }
        });
        if (res[0].length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

exports.addProductToCart = async (userEmail, idProduct) => {
    try {
        const poolPromise = connection.promise();
        await poolPromise.query('INSERT INTO PRODUCT_CART (USER_EMAIL, PRODUCT_ID, QUANTITY) VALUES (?,?,1)', [userEmail, idProduct], function (err) {
            if (err) {
                return false;
            }
        });
        return true;
    }
    catch (e) {
        return false;
    }
}

exports.updateQuantity = async (userEmail, idProduct, newQuantity) => {
    try {
        const poolPromise = connection.promise();
        await poolPromise.query('UPDATE PRODUCT_CART SET PRODUCT_CART.QUANTIIY = ? WHERE PRODUCT_CART.USER_EMAIL = ? AND PRODUCT_CART.PRODUCT_ID = ?', [newQuantity, userEmail, idProduct], function (err) {
            if (err) {
                return false;
            }
        })
        return true;
    }
    catch (e) {
        return false;

    }
}

exports.removeProductInCart = async (userEmail, idProduct) => {
    try {
        const poolPromise = connection.promise();
        await poolPromise.query('DELETE FROM PRODUCT_CART WHERE PRODUCT_CART.USER_EMAIL = ? AND PRODUCT_CART.PRODUCT_ID = ?', [userEmail, idProduct], function (err) {
            if (err) {
                return false;
            }
        });
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}