export interface Users {
  id: string;
  username: string;
  name: string;
  bio: string;
  avatarUrl: string;
  socialLinks: SocialLinks[];
  products: Products[];
}

export interface SocialLinks {
  platform: string;
  url: string;
}
export interface Products {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  coverImage: string;
  isPublished: boolean;
}
export interface BaseResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string | string[];
}
