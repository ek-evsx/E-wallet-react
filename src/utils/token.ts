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

export const getParsedJWT = (): IParsedToken | null => {
  const parsedTokenData = getParsedTokenData();

  if (!parsedTokenData) {
    return null;
  }
  return jwt_decode(parsedTokenData.accessToken);
}
export const parseToken = (token: string): IToken => JSON.parse(token);

export const isTokenExpired = () => {
  const parsedTokenData = getParsedTokenData();

  if (!parsedTokenData) {
    return true;
  }

  return moment().isAfter(parsedTokenData.expiresIn);
};

export const getParsedTokenData = () => {
  const token = getToken();

  if (!token) {
    return null;
  }
  return parseToken(token);
};

export const saveTokenData = (token: IToken) => localStorage.setItem('token', JSON.stringify(token));

export const clearTokenData = () => localStorage.removeItem('token');
