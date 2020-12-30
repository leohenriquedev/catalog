const connection = require('../database/connection');

// Get catalog.json
const catalog = require('../json/catalog.json');

module.exports = {

    async index(request, response) {
        const result = await connection('products').count('id');

        if (result[0].count == 0) {

            const availableProducts = [];

            catalog.map(async (obj) => {

                if (['available', 'AVAILABLE'].includes(obj.status)) {
                    availableProducts.push({
                        name: obj.name,
                        price: obj.price,
                        status: obj.status,
                        categories: obj.categories[0].name,
                        image: obj.images.default
                    });

                    try {
                        await connection('products').insert(availableProducts);
                    } catch (error) {
                        console.log(error);
                    }
                }
            });

            return response.json(availableProducts);

        }

        const maxProducts = 16;

        const products = await connection('products').select('*').limit(maxProducts);
        return response.json(products);

        // const maxProducts = request.body.maxProducts;
        // const mostPopular = request.body.mostPopular;
        // const priceReduction = request.body.priceReduction;
    }

}