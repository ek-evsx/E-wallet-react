import jwt_decode from 'jwt-decode';
import moment from 'moment';

interface IToken {
  userId: string;
  expiresIn: number;
};

export const getToken = () => localStorage.getItem('token');

export const parseJWT = (token: string): IToken => jwt_decode(token);

export const isTokenExpired = () => {
  const token = getToken();
  if (!token) {
    return true;
  }

  const parsedToken = parseJWT(String(token));

  return moment().isBefore(parsedToken.expiresIn);
};
