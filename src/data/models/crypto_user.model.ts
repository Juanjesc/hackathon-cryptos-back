import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { STRING, NUMBER } from "sequelize";
import { UserPojo } from "./user.model";
import { CryptomonedasPojo } from "./cryptomoneda.model";

@Table({
  freezeTableName: true,
  tableName: "cryptos_user",
  schema: "backTareaFiltros",
})
export class CryptoUserPojo extends Model {
  @ForeignKey(() => CryptomonedasPojo)
  @Column({
    primaryKey: true,
    type: STRING,
    field: "crypto_id",
  })
  cryptoId: string;
  @ForeignKey(() => UserPojo)
  @Column({
    type: STRING,
    field: "user_id",
  })
  userId: string;
  @Column({
    type: NUMBER,
    field: "amount",
  })
  amount: number;
}
