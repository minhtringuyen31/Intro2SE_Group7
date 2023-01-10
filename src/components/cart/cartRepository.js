const connection = require('../../connectDB');
const START_STATUS = 'exercuting';

exports.hasCart = async (userPhone) => {
    try {
        const poolPromise = connection.promise();
        const res = await poolPromise.query('SELECT product_in_cart.quantity FROM product_in_cart WHERE product_in_cart.idCart = ? LIMIT 1', [userPhone], function (err) {
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