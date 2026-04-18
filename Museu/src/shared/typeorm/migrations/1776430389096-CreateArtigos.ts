import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArtigos1776430389096 implements MigrationInterface {
    name = 'CreateArtigos1776430389096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "artigos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" character varying NOT NULL, "description" character varying NOT NULL, "local" character varying NOT NULL, "data_obtencao" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_713f961d8ef004dfae39de2dfaa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "artigos"`);
    }

}
