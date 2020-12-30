const routes = require('express').Router();

// Controllers
const CatalogController = require('./controllers/CatalogController');

// Routes
routes.post('/data', CatalogController.index);

module.exports = routes;