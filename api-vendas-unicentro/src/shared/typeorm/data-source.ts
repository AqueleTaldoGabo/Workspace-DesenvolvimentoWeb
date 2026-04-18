import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost", // se Node está fora do Docker
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "apivendas-unicentro",
  synchronize: false, // sempre false em produção/migrations
  logging: true,
  entities: [],
  migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")],
});
