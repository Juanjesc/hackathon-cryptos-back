import { connect } from "../config/user.db.config";
import { CryptoUserPojo } from "../models/crypto_user.model";

export class CryptoUserRepository {
  _database: any = {};
  _cryptoUserRepository: any;

  constructor() {
    this._database = connect();
    this._cryptoUserRepository =
      this._database.sequelize.getRepository(CryptoUserPojo);
  }
  async updateCryptoUser(cryptoUser: CryptoUserPojo): Promise<string> {
    try {
      const data = await this._cryptoUserRepository.findOne({
        where: {
          userId: cryptoUser.userId,
          cryptoId: cryptoUser.cryptoId,
        },
      });
      if (!!data) {
        //si existen datos actualiza si no crea
        this._cryptoUserRepository.update(
          { amount: cryptoUser.amount },
          {
            where: {
              userId: cryptoUser.userId,
              cryptoId: cryptoUser.cryptoId,
            },
          }
        );
        return "updated";
      } else {
        this._cryptoUserRepository.create(cryptoUser);
        return "created";
      }
    } catch (error) {
      console.log(error);
      return "-1"; //-1 indicamos que ha finalizado con errores
    }
  }
  async getCryptoUserByUserIdAndCryptoId(userId: string, cryptoId: string): Promise<CryptoUserPojo | undefined>{
    try {
        let cryptouser = await this._cryptoUserRepository.findOne({
          where: {
            userId: userId,
            cryptoId: cryptoId
          }
          
        });
        if(!!cryptouser){
            return cryptouser
        }
        else{
            console.log('El usuario no existe aún en esta tabla, devolviendo undefined...')
            return undefined
        }
        
    } catch (error) {
        return undefined
    }
  }
}
