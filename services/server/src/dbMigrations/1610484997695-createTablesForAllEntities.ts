import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablesForAllEntities1610484997695 implements MigrationInterface {
    name = 'createTablesForAllEntities1610484997695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "records" ("created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "update_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, "personId" integer, CONSTRAINT "PK_188149422ee2454660abf1d5ee5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "persons" ("created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "update_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "records" ADD CONSTRAINT "FK_6a5afcabbbe7fa8004f3dcb5670" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "records" DROP CONSTRAINT "FK_6a5afcabbbe7fa8004f3dcb5670"`);
        await queryRunner.query(`DROP TABLE "persons"`);
        await queryRunner.query(`DROP TABLE "records"`);
    }

}
