const { Router } = require('express');

const PanettoneControler = require('./controllers/PanettoneController');

const routes = new Router();

routes.get('/panettones', PanettoneControler.get);
routes.get('/panettones/:id', PanettoneControler.getById);

module.exports = routes;