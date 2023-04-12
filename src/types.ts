export class UserDto {
  userId: string;
  username: string;
  password: string;
  email: string;
  fullname: string;
  birthdate: string;
  deposit: number;
}
export type NewUserDto = Omit<UserDto, "userId">;

export class UserLogin {
  username: string;
  password: string;
}

export class CryptomonedasDTO {
  cryptoId: string;
  cryptoname: string;
  cryptovalue: number;
  cryptoicon?: string;
  cryptoasset: string;
  cryptostock: number;
}

export class CryptoUserDto{
  amount: number;
  userId: string;
  cryptoId: string;
}

