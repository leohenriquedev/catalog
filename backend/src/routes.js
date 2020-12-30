const routes = require('express').Router();

// Controllers
const CatalogController = require('./controllers/CatalogController');

// Routes
routes.get('/data', CatalogController.index);

module.exports = routes;