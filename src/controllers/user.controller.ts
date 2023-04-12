import { UserLogin } from './../types';
import { UserService } from "../services/user.services";
const userService: UserService = new UserService();
export const userController = {
  addUser: (req: any, res: any) => {
    try {
      const newUser = req.body;
      userService.addUser(newUser).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  getAllUsers: (_req: any, res: any) => {
    userService.getAllUsers().then((result) => {
      res.json(result);
    });
  },
  getUserById: (req: any, res: any) => {
    try {
      const userId = req.params.id;
      userService.getUserById(userId.toString()).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  getUserInfoHeaderById: (req: any, res: any) => {
    try {
      const userId = req.params.id;
      userService.getUserInfoHeader(userId.toString()).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

  getLogin: (req: any, res: any) => {
    try {
      var username = req.body.username;
      var password = req.body.password;
      const userLogin: UserLogin = {
        username,
        password,
      };
      userService.getLogin(userLogin).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  
  updateDeposit: (req: any, res: any) => {
    try {
      const valueDeposit = req.body;
      userService.updatedDeposit(valueDeposit).then((result) => {
        res.json(result)
      })
    } catch (error) {
      console.error(error)
      res.sendStatus(500);
    }
  }
};
