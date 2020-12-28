const routes = require('express').Router();

// Controllers
const CatalogController = require('./controllers/CatalogController');

// Routes
routes.get('/', CatalogController.helloWorld);

module.exports = routes;