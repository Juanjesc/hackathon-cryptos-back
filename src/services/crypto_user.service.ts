import { CryptoUserDto } from "./../types";
import { CryptoUserPojo } from "../data/models/crypto_user.model";
import { CryptoUserRepository } from "../data/repository/crypto_user.repository";
export class CryptoUserService {
  _cryptoUserRepository: CryptoUserRepository;
  constructor() {
    this._cryptoUserRepository = new CryptoUserRepository();
  }
  async updateCryptos(cryptoUser: CryptoUserDto): Promise<string> {
    //TODO: LLamar al repositorio
    var cryptoUserPojo: CryptoUserPojo = cryptoUser as CryptoUserPojo;
    const cryptoUserPromise = await this._cryptoUserRepository
      .updateCryptoUser(cryptoUserPojo)
      .then((cryptouser) => {
        return cryptouser;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return cryptoUserPromise;
  }
  async getCryptoUserByIdAndCryptoId(userId: string, cryptoId: string): Promise<CryptoUserDto | undefined> {
    const cryptoUserPromise: CryptoUserDto | undefined =
      await this._cryptoUserRepository
        .getCryptoUserByUserIdAndCryptoId(userId, cryptoId)
        .then((cryptouserPojo) => {
          if (!!cryptouserPojo) {
            return this.convertPojotoDTO(cryptouserPojo);
          } else {
            return undefined;
          }
        });
    return cryptoUserPromise;
  }

  convertPojotoDTO(cryptouserPojo: CryptoUserPojo) {
    let cryptoUserAsDto: CryptoUserDto = cryptouserPojo;
    return cryptoUserAsDto;
  }
}
