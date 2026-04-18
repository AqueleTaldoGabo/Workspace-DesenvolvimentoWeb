import { AppDataSource } from "@shared/typeorm/data-source";
import { Repository } from "typeorm";
import Artigo from "../typeorm/entities/artigos";

export default class ArtigoRepository {
  private ormRepository: Repository<Artigo>;
  constructor() {
    this.ormRepository = AppDataSource.getRepository(Artigo);
  }
  public async findByName(name: string): Promise<Artigo | null> {
    const artigo = await this.ormRepository.findOne({
      where: { name },
    });
    return artigo;
  }
}

