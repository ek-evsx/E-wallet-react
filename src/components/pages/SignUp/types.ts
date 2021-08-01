export interface ISignUpData {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  birthDate: Date;
  password: string;
  login: string;
};

export interface IFormData extends ISignUpData {
  verifyPassword: string;
};
