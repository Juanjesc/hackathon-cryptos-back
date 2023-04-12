import { Sequelize } from "sequelize-typescript";
import { UserPojo } from "../models/user.model";
import { CryptoUserPojo } from "../models/crypto_user.model";
import { CryptomonedasPojo } from "../models/cryptomoneda.model";

export const connect = () => {
  const DB_HOSTNAME = "localhost";
  const DB_PORT = 5432;
  const DB_NAME = "postgres";
  const DB_USERNAME = "juanjesus";
  const DB_PASSWORD = "@Develop25++";
  const DB_SCHEMA = "backTareaFiltros";
  const DB_DIALECT: any = "postgres";
  const db_config = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
    schema: DB_SCHEMA,
    port: DB_PORT,
    repositoryMode: true, 
    pool: {
      max: 10, 
      min: 0,
      acquire: 20000,
      idle: 5000, 
    },
  });
  db_config.addModels([UserPojo, CryptoUserPojo, CryptomonedasPojo]);
  const db_connect: any = {};
  db_connect.Sequelize = Sequelize;
  db_connect.sequelize = db_config;
  return db_connect
};
