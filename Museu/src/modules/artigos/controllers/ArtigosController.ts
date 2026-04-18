import { Request, Response, NextFunction } from 'express';
import CreateArtigoService from '../services/CreateArtigoService';
import DeleteArtigoService from '../services/DeleteArtigoService';
import ListArtigoService from '../services/ListArtigoService';
import ShowArtigoService from '../services/ShowArtigoService';
import UpdateArtigoService from '../services/UpdateArtigoService';

export default class ProductsController {  
  public async index(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const listArtigos = new ListArtigoService();
      const artigos = await listArtigos.execute();
      return response.json(artigos);
    } catch (err) {
      next(err);
    }
  }

  public async show(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = request.params.id as string;
      const showArtigo = new ShowArtigoService();
      const artigo = await showArtigo.execute({ id });
      return response.json(artigo);
    } catch (err) {
      next(err);
    }
  }

  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { name, type, description, local, data_obtencao } = request.body;
      const createArtigo = new CreateArtigoService();
      const artigo = await createArtigo.execute({
        name,
        type,
        description,
        local,
        data_obtencao,
      });
      return response.status(201).json(artigo);
    } catch (err) {
      next(err);
    }
  }

  public async update(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = request.params.id as string;
      const { name, type, description, local, data_obtencao } = request.body;
      const updateArtigo = new UpdateArtigoService();
      const artigo = await updateArtigo.execute({
        id,
        name,
        type,
        description,
        local,
        data_obtencao,
      });
      return response.json(artigo);
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = request.params.id as string;
      const deleteArtigo = new DeleteArtigoService();
      await deleteArtigo.execute({ id });
      return response.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
