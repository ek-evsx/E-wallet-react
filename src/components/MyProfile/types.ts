export interface IProfile {
  fullName: string;
  avatarUrl: string;
  email: string;
  [key: string]: string | number;
};
