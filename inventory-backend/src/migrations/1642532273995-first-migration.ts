import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1642532273995 implements MigrationInterface {
    name = 'firstMigration1642532273995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("barcode" integer NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_37d13d4530be2b2a772fc25fbbf" PRIMARY KEY ("barcode"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
