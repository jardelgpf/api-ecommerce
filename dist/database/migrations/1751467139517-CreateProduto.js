"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduto1751467139517 = void 0;
const typeorm_1 = require("typeorm");
class CreateProduto1751467139517 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "produtos",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '100'
                },
                {
                    name: 'preco',
                    type: 'decimal',
                    precision: 10,
                    scale: 2
                },
                {
                    name: 'descicao',
                    type: 'text'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("produtos");
    }
}
exports.CreateProduto1751467139517 = CreateProduto1751467139517;
