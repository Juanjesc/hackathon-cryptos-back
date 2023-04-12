
import { CryptomonedaService } from "../services/cryptomonedas.services";
const cryptomonedaService: CryptomonedaService = new CryptomonedaService();
export const cryptomonedaController = {
  getAllCryptomonedas: (_req: any, res: any) => {
    cryptomonedaService.getAllCryptomonedas().then((result) => {
      res.json(result);
      console.log('entrando por controlador all crypto')
    });
  },
  getIdCryptoByAsset: (req: any, res: any) => {
    try {
     
      const cryptomonedaAsset = req.params.asset; 
      cryptomonedaService.getIdCryptoByAsset(cryptomonedaAsset.toUpperCase()).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  updateStock: (req: any, res: any) => {
    try {
      const valueStock = req.body;
      cryptomonedaService.updateStock(valueStock).then((result)=>{
        res.json(result)
      })
    } catch (error) {
      console.error(error)
      res.sendStatus(500);
    }
  }
};
