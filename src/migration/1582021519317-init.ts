import {MigrationInterface, QueryRunner} from "typeorm";

export class init1582021519317 implements MigrationInterface {
    name = 'init1582021519317'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "name" character varying(128) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "description" character varying(300) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "year" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "lastChangedDateTime"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "createDateTime"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "year"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "description"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "id"`, undefined);
    }

}
