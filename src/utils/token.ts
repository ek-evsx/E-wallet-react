import jwt_decode from 'jwt-decode';
import moment from 'moment';

interface IParsedToken {
  userId: string;
  expiresIn: number;
};

interface IToken {
  accessToken: string;
  expiresIn: number;
};

export const getToken = (): string | null  => localStorage.getItem('token');

export const parseJWT = (token: string): IParsedToken => jwt_decode(token);
export const parseToken = (token: string): IToken => JSON.parse(token);

export const isTokenExpired = () => {
  const token = getToken();

  if (!token) {
    return true;
  }
  const parsedToken = parseToken(token);
  
  return moment().isAfter(parsedToken.expiresIn);
};

export const saveTokenData = (token: IToken) => localStorage.setItem('token', JSON.stringify(token));