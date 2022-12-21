export type User = {
  _id: string;
  id: number;
  email: string;
  name: string;
  gender: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type RootObject = {
  count: number;
  users: User[];
};
