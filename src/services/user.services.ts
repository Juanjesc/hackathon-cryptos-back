import { UserLogin } from './../types';
import { NewUserDto, UserDto } from "../types";
import { UserRepository } from "../data/repository/user.repository";
import { UserPojo } from "../data/models/user.model";
export class UserService {
  _userRepository: UserRepository;
  constructor() {
    this._userRepository = new UserRepository();
  }
  async addUser(user: UserDto): Promise<string> {
    //TODO: LLamar al repositorio
    const userPromise = await this._userRepository
      .addUser(user)
      .then((userId) => {
        return userId;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return userPromise;
  }
  async getAllUsers(): Promise<UserDto[]> {
    //TODO: LLamar al repositorio
    const userPromise = await this._userRepository
      .getAllUsers()
      .then((usersAsPojo) => {
        let usersAsDto: UserDto[] = [];
        usersAsPojo.forEach((userAsPojo) => {
          let userAsDto = this.parsePojoIntoDto(userAsPojo);
          usersAsDto.push(userAsDto);
        });
        return usersAsDto;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return userPromise;
  }
  async getUserById(id: string): Promise<UserDto | undefined> {
    const userPromise = await this._userRepository
      .getUserById(id)
      .then((userAsPojo) => {
        if (!!userAsPojo) {
          return this.parsePojoIntoDto(userAsPojo);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return userPromise;
  }
  async getUserInfoHeader(id: string): Promise<{username: string, deposit: number} | undefined> {
    const userPromise = await this._userRepository
      .getInfoUserHeader(id)
      .then((userAsPojo) => {
        if (!!userAsPojo) {
          return {username: userAsPojo.username, deposit: userAsPojo.deposit};
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return userPromise;
  }
  async getLogin(userLogin: UserLogin): Promise<string> {
    const userPromise = await this._userRepository
      .getLogin(userLogin)
      .then((userLoginData) => {
        return userLoginData;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return userPromise;
  }
  async updatedDeposit(user: UserDto): Promise<string>{
    var userPojo: UserPojo = user as UserPojo
    const userPromise = await this._userRepository.updatedDeposit(userPojo).then((userAsPojo) =>{
      return userAsPojo
    }).catch((error) => {
      console.log(error)
      throw error;
    })
    return userPromise;
  }

  parsePojoIntoDto(userPojo: UserPojo): UserDto {
    const userDto: UserDto = {
      userId: userPojo.dataValues.userId,
      username: userPojo.dataValues.username,
      password: userPojo.dataValues.password,
      email: userPojo.dataValues.email,
      fullname: userPojo.dataValues.fullname,
      birthdate: userPojo.dataValues.birthdate,
      deposit: userPojo.dataValues.deposit,
    };
    return userDto;
  }
  parseDtoIntoPojo(userDto: NewUserDto): UserPojo {
    let userPojo: UserPojo = new UserPojo();
    userPojo.setDataValue("user_id", null);
    userPojo.setDataValue("username", userDto.username);
    userPojo.setDataValue("password", userDto.password);
    userPojo.setDataValue("email", userDto.email);
    userPojo.setDataValue("deposit", userDto.deposit);
    userPojo.setDataValue("birthdate", userDto.birthdate);
    userPojo.setDataValue("fullname", userDto.fullname);

    return userPojo;
  }
}
