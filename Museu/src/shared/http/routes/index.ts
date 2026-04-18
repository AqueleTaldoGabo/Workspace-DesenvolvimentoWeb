import { Router } from "express";
import artigosRouter from '@modules/artigos/routes/artigos.routes';

const routes = Router();

routes.use('/artigos', artigosRouter);
routes.get('/', (request, response) =>{
  return response.json({message: 'Hello Dev!'});
})

export default routes;
