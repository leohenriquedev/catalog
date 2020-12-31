const routes = require('express').Router();

// Controllers
const CatalogController = require('./controllers/CatalogController');

// Routes
routes.post('/products', CatalogController.index);

module.exports = routes;