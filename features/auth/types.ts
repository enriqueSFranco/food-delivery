// /auth/types.ts
export type AuthProvider = "google" | "apple" | "facebook" | "guest" | "email";

export interface AuthUser {
  id: string;
  email?: string;
  name?: string;
  provider: AuthProvider;
  isGuest?: boolean;
  // optional tokens only for social/email:
  accessToken?: string;
  refreshToken?: string;
  // metadata
  createdAt?: string;
}
