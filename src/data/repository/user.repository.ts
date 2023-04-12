import { UserDto, UserLogin } from './../../types';
import { UserPojo } from "../models/user.model";
import { connect } from "../config/user.db.config";

export class UserRepository {
  _database: any = {};
  _userRepository: any;

  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(UserPojo);
  }
  async addUser(newUser: UserDto): Promise<string> {
    try {
      newUser = await this._userRepository.create(newUser);
      return newUser.userId;
    } catch (error) {
      console.log(error);
      return "-1"; //-1 indicamos que ha finalizado con errores
    }
  }
  async getAllUsers(): Promise<UserPojo[]> {
    try {
      return await this._userRepository.findAll();
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async getUserById(id: string): Promise<UserPojo | undefined> {
    try {
      return await this._userRepository.findByPk(id);
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async getInfoUserHeader(id: string): Promise<{ username: string; deposit: number } | undefined> {
    try {
      let user = await this._userRepository.findByPk(id, {
        attributes: ["username", "deposit"],
      });
      if (!!user) {
        return {
          username: user.username,
          deposit: user.deposit,
        };
      }
      return undefined;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async getLogin(userLogin: UserLogin): Promise<string> | undefined {
    try {
      var findUser = await this._userRepository.findOne({
        where: {
          username: userLogin.username,
          password: userLogin.password,
        },
      });
      return findUser.userId;
    } catch (error) {
      console.log(error + "ei");
      return undefined;
    }
  }

  async updatedDeposit(user: UserPojo): Promise<string>{
    try {
      const data = await this._userRepository.findOne({
        where: {
          userId: user.userId
        }
      })
      if (!!data){
        this._userRepository.update({deposit: user.deposit},{where: {
          userId: user.userId
        }})
        return "updated deposit"
      }
      else{
        return "-1"
      }
    } catch (error) {
      console.log('el usuario no existe')
      return "-1"
    }
  }
}
