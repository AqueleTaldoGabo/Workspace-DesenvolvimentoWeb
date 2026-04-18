import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Artigo from "@shared/typeorm/entities/artigos";

interface IRequest {
  id: string;
}

export default class DeleteArtigoService {
  public async execute({ id }: IRequest): Promise<void> {
    const artigosRepository = AppDataSource.getRepository(Artigo);
    const artigo = await artigosRepository.findOneBy({ id });
    if (!artigo) {
      throw new AppError("Artigo not found.");
    }
    await artigosRepository.remove(artigo);
  }
}
