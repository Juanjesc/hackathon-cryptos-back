import { Table, Column, Model } from "sequelize-typescript";
import { STRING, NUMBER } from "sequelize";

@Table({
  freezeTableName: true, 
  tableName: "cryptomonedas",
  schema: "backTareaFiltros", 
})
export class CryptomonedasPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "crypto_id",
  })
  cryptoId: string;
  @Column({
    type: STRING,
    field: "cryptoname",
  })
  cryptoname: string;
  @Column({
    type: NUMBER,
    field: "value",
  })
  cryptovalue: number;
  @Column({
    type: STRING,
    field: "icon",
  })
  cryptoicon: string;
  @Column({
    type: STRING,
    field: "asset",
  })
  cryptoasset: string;
  @Column({
    type: NUMBER,
    field: "stock",
  })
  cryptostock: number;
}
