export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  profileImageUrl?: string;
  followers?: number;
  following?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
