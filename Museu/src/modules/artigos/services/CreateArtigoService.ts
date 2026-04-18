import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Artigo from "@shared/typeorm/entities/artigos";

interface IRequest {
  name: string;
  type: string;
  description: string;
  local: string;
  data_obtencao: Date; 
}
export default class CreateArtigoService {
  public async execute({ name, type, description, local, data_obtencao }: IRequest):
    Promise<Artigo> {
      const artigosRepository = AppDataSource.getRepository(Artigo);
      const artigoExists = await artigosRepository.findOne({
        where: { name },
      });
      if (artigoExists) {
        throw new AppError("There is already one artigo with this name.");
      }
      const artigo = artigosRepository.create({
        name,
        type,
        description,
        local,
        data_obtencao
      });
      await artigosRepository.save(artigo);
      return artigo;
    }
}
