import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Artigo from "@shared/typeorm/entities/artigos";

interface IRequest {
  id: string;
}

export default class ShowArtigoService {
  public async execute({ id }: IRequest): Promise<Artigo> {
    const artigosRepository = AppDataSource.getRepository(Artigo);
    const artigo = await artigosRepository.findOneBy({ id });
    if (!artigo) {
      throw new AppError("Artigo not found.");
    }
    return artigo;
  }
}
