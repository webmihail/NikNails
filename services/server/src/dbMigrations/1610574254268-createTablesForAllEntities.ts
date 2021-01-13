import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablesForAllEntities1610574254268 implements MigrationInterface {
    name = 'createTablesForAllEntities1610574254268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "records" ("created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "update_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, "person_id" integer, CONSTRAINT "PK_188149422ee2454660abf1d5ee5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "persons" ("created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "update_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "id" SERIAL NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "phone_number" character varying(255) NOT NULL, CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "update_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "id" SERIAL NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(128) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "records" ADD CONSTRAINT "FK_cc0f6675467402d0351be0b2b86" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "records" DROP CONSTRAINT "FK_cc0f6675467402d0351be0b2b86"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "persons"`);
        await queryRunner.query(`DROP TABLE "records"`);
    }

}
