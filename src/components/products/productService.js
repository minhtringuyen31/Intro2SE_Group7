const Paginator = require('paginator');

const productRepository = require('./productRepository');
const { ITEM_PER_PAGE, TOTAL_PAGING_LINK } = require('../../constant');

exports.getProductsByPage = async (page) => {
    const result = await productRepository.getProductsByPage(page);
    return result;
}

exports.count = async (page) => {
    const result = await productRepository.count();
    return result;
}