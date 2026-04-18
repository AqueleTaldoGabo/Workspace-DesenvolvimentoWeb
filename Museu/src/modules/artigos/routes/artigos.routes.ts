import { Router } from 'express';
import ArtigosController from '../controllers/ArtigosController';
import { celebrate, Joi, Segments } from 'celebrate';

const artigosRouter = Router();
const artigosController = new ArtigosController();

artigosRouter.get('/', async (req, res, next) => {
  try {
    await artigosController.index(req, res, next);
  } catch (err) {
    next(err);
  }
});

artigosRouter.get('/:id', celebrate({
  [Segments.PARAMS] : {id: Joi.string().uuid().required()}
}), async (req, res, next) => {
  try {
    await artigosController.show(req, res, next);
  } catch (err) {
    next(err);
  }
});

artigosRouter.post('/', celebrate({
  [Segments.BODY] :{
	  name: Joi.string().required(),
	  type: Joi.string().required(),
	  description: Joi.string().required(),
    local: Joi.string().required(),
    data_obtencao: Joi.date().required()
  }
}), async (req, res, next) => {
  try {
    await artigosController.create(req, res, next);
  } catch (err) {
    next(err);
  }
});

artigosRouter.put('/:id', celebrate({
  [Segments.PARAMS] : {id: Joi.string().uuid().required()},
  [Segments.BODY] :{
	  name: Joi.string().required(),
	  type: Joi.string().required(),
	  description: Joi.string().required(),
    local: Joi.string().required(),
    data_obtencao: Joi.date().required()
  }
}), async (req, res, next) => {
  try {
    await artigosController.update(req, res, next);
  } catch (err) {
    next(err);
  }
});

artigosRouter.delete('/:id', celebrate({
  [Segments.PARAMS] : {id: Joi.string().uuid().required()}
}), async (req, res, next) => {
  try {
    await artigosController.delete(req, res, next);
  } catch (err) {
    next(err);
  }
});

export default artigosRouter;
