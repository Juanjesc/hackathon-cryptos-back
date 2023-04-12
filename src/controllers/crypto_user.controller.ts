import { CryptoUserService } from "../services/crypto_user.service";
const cryptoUserService: CryptoUserService = new CryptoUserService();
export const cryptoUserController = {
    updateCryptos: (req: any, res: any) => {
        try {
            const valueCryptoUser = req.body; //aquí quizás va el parseo de utils
            cryptoUserService.updateCryptos(valueCryptoUser).then((result) => {
            res.json(result);
        });
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },
    getCryptouserByIdAndCryptoId: (req: any, res:any) => {
        const userId = req.params.userId
        const cryptoId = req.params.cryptoId
        cryptoUserService.getCryptoUserByIdAndCryptoId(userId, cryptoId).then(result => {
            res.json(result)
        })
    }

};

