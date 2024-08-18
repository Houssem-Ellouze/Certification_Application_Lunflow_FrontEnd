export interface User {
  id:string;
  name: string;
  email: string;
  file?: File; // The file is optional, as indicated by the question mark (?)
  verificationLink: string;
}
