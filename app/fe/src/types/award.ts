export interface Award {
  id: string;
  title: string;
  description: string;
  userId: string;
  date?: string;
  likes?: number;
  comments?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
