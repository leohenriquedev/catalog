const connection = require('../database/connection');

// Get catalog.json
const catalog = require('../json/catalog.json');

module.exports = {

    async index(request, response, next) {
        
        const maxProducts = request.body.maxProducts >= 10 ? request.body.maxProducts : 10;
        const responseType = request.body.responseType == 'complete' ? '*' : ['name', 'price', 'status', 'categories'];
        const mostPopularIds = request.body.mostPopularIds;
        const priceReductionIds = request.body.priceReductionIds;

        const result = await connection('products').count('id');

        if (result[0].count == 0) {

            catalog.map(async (obj) => {

                if (['available', 'AVAILABLE'].includes(obj.status)) {
                    var availableProduct = {
                        productId: obj.id,
                        name: obj.name,
                        price: obj.price,
                        oldPrice: obj.oldPrice,
                        status: obj.status,
                        categories: obj.categories[0].name,
                        image: obj.images.default
                    };

                    try {
                        await connection('products').insert(availableProduct);
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        }

        const mostPopularProducts = await connection('products').select(responseType).whereIn('productId', mostPopularIds).limit(maxProducts);
        const priceReductionProducts = await connection('products').select(responseType).whereIn('productId', priceReductionIds).limit(maxProducts);

        return response.json({
            mostPopularProducts: mostPopularProducts,
            priceReductionProducts: priceReductionProducts
        });

    }

}