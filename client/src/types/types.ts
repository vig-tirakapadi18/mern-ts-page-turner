export interface ISignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface IBookFormData {
  // _id: string;
  // userId: string;
  name: string;
  author: string;
  publicationYear: number;
  genre: string;
  availableTypes: string[];
  description: string;
  pages: number;
  isbn: string;
  price: number;
  starRating: number;
  imgFiles: FileList;
  lastUpdated: Date;
}
