export interface IUser {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IBook {
  _id: string;
  userId: string;
  name: string;
  author: string;
  publicationYear: number;
  genres: string;
  description: string;
  pages: number;
  isbn: string;
  price: number;
  starRating: number;
  imgUrls: string[];
  lastUpdated: Date;
}
