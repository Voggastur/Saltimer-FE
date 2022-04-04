export interface AnonymsUser {
  name: string;
  imageUrl: string;
  turn: number | undefined;
}

export interface User {
  id: 0;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profileImage: string;
  emailAddress: string;
  createdAt: Date;
}
