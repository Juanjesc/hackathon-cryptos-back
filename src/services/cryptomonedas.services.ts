import { CryptomonedasDTO } from './../types';
import { CryptomonedasPojo } from './../data/models/cryptomoneda.model';
import { CryptomonedasRepository } from "../data/repository/cryptomonedas.repository";
export class CryptomonedaService {
  _cryptomonedasRepository: CryptomonedasRepository
  constructor() {
    this._cryptomonedasRepository = new CryptomonedasRepository();
  }
  async getAllCryptomonedas(): Promise<CryptomonedasDTO[]> {
    //TODO: LLamar al repositorio
    const cryptomonedaPromise = await this._cryptomonedasRepository
      .getAllCryptomonedas()
      .then((cryptomonedasAsPojo) => {
        let cryptomonedasAsDto: CryptomonedasDTO[] = [];
        cryptomonedasAsPojo.forEach((cryptomonedaAsPojo) => {
          let cryptomonedaAsDto = this.parsePojoIntoDto(cryptomonedaAsPojo);
          cryptomonedasAsDto.push(cryptomonedaAsDto);
        });
        return cryptomonedasAsDto;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return cryptomonedaPromise;
  }
  async getIdCryptoByAsset(asset: string): Promise<String | undefined> {
    //TODO: LLamar al repositorio
    const cryptomonedaPromise = await this._cryptomonedasRepository
      .getIdCryptoByAsset(asset)
      .then((cryptoIdData) => {
        //La doble exclamación indica que es distinto a nulo y a undefined
        if (!!cryptoIdData) {
          return cryptoIdData;
        } 
        else{
          return undefined
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return cryptomonedaPromise;
  }
  async updateStock(crypto: CryptomonedasDTO): Promise<string>{
    var cryptoPojo: CryptomonedasPojo = crypto as CryptomonedasPojo
    const cryptomonedasPromise = await this._cryptomonedasRepository.updateStock(cryptoPojo).then((cryptoasPojo)=>{
      return cryptoasPojo
    }).catch((error)=>{
      console.log(error)
      throw error;
    })
    return cryptomonedasPromise
  }

  parsePojoIntoDto(cryptomonedaPojo: CryptomonedasPojo): CryptomonedasDTO {
    const cryptomonedaDTO: CryptomonedasDTO = {
      cryptoId: cryptomonedaPojo.dataValues.cryptoId,
      cryptoname: cryptomonedaPojo.dataValues.cryptoname,
      cryptovalue: cryptomonedaPojo.dataValues.cryptovalue,
      cryptoicon: cryptomonedaPojo.dataValues.cryptoicon,
      cryptoasset: cryptomonedaPojo.dataValues.cryptoasset,
      cryptostock: cryptomonedaPojo.dataValues.cryptostock,

    };
    return cryptomonedaDTO;
  }
}
