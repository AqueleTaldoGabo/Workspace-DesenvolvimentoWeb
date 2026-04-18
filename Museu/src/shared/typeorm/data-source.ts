import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import Artigo from "@shared/typeorm/entities/artigos";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "museu",
  database: "apimuseu",
  synchronize: true,
  logging: false,
  entities: [Artigo],
  migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")],
  subscribers: [],
});
