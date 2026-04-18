import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Artigo from "@shared/typeorm/entities/artigos";

interface IRequest {
  id: string;
  name: string;
  type: string;
  description: string;
  local: string;
  data_obtencao: Date;
}
export default class UpdateArtigoService {
  public async execute({ id, name, type, description, local, data_obtencao }: IRequest):
    Promise<Artigo> {
      const artigosRepository = AppDataSource.getRepository(Artigo);
      const artigo = await artigosRepository.findOneBy({ id });
      if (!artigo) {
        throw new AppError("Artigo not found.");
      }
      const artigoExists = await artigosRepository.findOneBy({ name });
      if (artigoExists && artigoExists.id !== artigo.id) {
        throw new AppError("There is already one artigo with this name.");
      }
      artigo.name = name;
      artigo.type = type;
      artigo.description = description;
      artigo.local = local;
      artigo.data_obtencao = data_obtencao;
      await artigosRepository.save(artigo);
      return artigo;
    }
}
