const express = require('express');
const tareaController = require('../controllers/tareaController');

const tareaRouter = express.Router();

//Middleware
tareaRouter.use(express.json());

tareaRouter.get('/', tareaController.readTareas);
tareaRouter.get('/:id', tareaController.readTareaById);
tareaRouter.post('/', tareaController.createTarea);
tareaRouter.put('/:id', tareaController.updateTarea);

module.exports = tareaRouter;