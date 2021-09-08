export interface ISignUpData {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  birthDate: Date;
  password: string;
  login: string;
  avatar: Blob | null;
};

export interface IFormData extends Omit<ISignUpData, 'avatar'> {
  verifyPassword: string;
  avatar: Array<Blob> | null;
};
