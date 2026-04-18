import { AppDataSource } from "@shared/typeorm/data-source";
import Artigo from "@shared/typeorm/entities/artigos";

export default class ListArtigoService {
  public async execute(): Promise<Artigo[]> {
    const artigosRepository = AppDataSource.getRepository(Artigo);
    return artigosRepository.find();
  }
}
