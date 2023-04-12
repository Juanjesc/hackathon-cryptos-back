import { Table, Column, Model } from "sequelize-typescript";
import { STRING, DATE, NUMBER } from "sequelize";

@Table({
  freezeTableName: true,
  tableName: "usuarios",
  schema: "backTareaFiltros",
})
export class UserPojo extends Model{
  @Column({
    primaryKey: true,
    type: STRING,
    field: "user_id",
  })
  userId: string;
  @Column({
    type: STRING,
    field: "username",
  })
  username: string;
  @Column({
    type: STRING,
    field: "password",
  })
  password: string;
  @Column({
    type: STRING,
    field: "email",
  })
  email: string;
  @Column({
    type: STRING,
    field: "fullname",
  })
  fullname: string;
  @Column({
    type: NUMBER,
    field: "deposit",
  })
  deposit: number;
  @Column({
    type: STRING,
    field: "birthdate",
  })
  birthdate: string;
  @Column({
    type: DATE,
    field: "createdAt",
  })
  createdAt: Date;
  @Column({
    type: DATE,
    field: "updatedAt",
  })
  updatedAt: Date;
}
