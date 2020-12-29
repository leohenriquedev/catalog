const connection = require('../database/connection');

// Get catalog.json
const catalog = require('../json/catalog.json');

module.exports = {

    async helloWorld(request, response) {
        const data = await connection('products').select('*');
        console.log(data);
        await response.json(catalog);
    }

}