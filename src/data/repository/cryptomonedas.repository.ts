import { CryptomonedasPojo } from "../models/cryptomoneda.model";
import { connect } from "../config/user.db.config";

export class CryptomonedasRepository {
  _database: any = {};
  _cryptomonedasRepository: any;

  constructor() {
    this._database = connect();
    this._cryptomonedasRepository = this._database.sequelize.getRepository(CryptomonedasPojo);
  }
  async getAllCryptomonedas(): Promise<CryptomonedasPojo[]> {
    try {
      return await this._cryptomonedasRepository.findAll({
        order:[['crypto_id','ASC']]
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async getIdCryptoByAsset(asset: string): Promise<String | undefined> {
    try {
        console.log(asset)
      var findCryptoId = await this._cryptomonedasRepository.findOne({
        where: {
          asset: asset,
        },
      });
      return findCryptoId.cryptoId
      
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async updateStock(cryptos: CryptomonedasPojo): Promise<string>{
    try {
      const data = await this._cryptomonedasRepository.findOne({
        where: {
          cryptoId: cryptos.cryptoId,
        },
      });
      if (!!data) {
        this._cryptomonedasRepository.update(
          { cryptostock: cryptos.cryptostock },
          {
            where: {
              cryptoId: cryptos.cryptoId,
            },
          }
        );
        console.log("updated stock")
        return "updated stock";
      } else {
        console.log("error al actualizar stock")
        return "-1";
      }
    } catch (error) {
      console.log("error al actualizar stock, no existe")
      return "-1"
    }
  }

}
