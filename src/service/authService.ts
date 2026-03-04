import { baseServiceApi } from "./baseApiService";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: { token: any; refreshToken: any; tokenExpires: any; };
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: {
      id: number;
      name: string;
    };
  };
}

export interface AuthResponse {
  data(data: any): unknown;
  id: number;
  email: string;
  provider: string;
  socialId: string | null;
  firstName: string;
  lastName: string;
  role: {
    id: number;
    name: string;
    __entity?: string;
  };
  status: {
    id: number;
    name: string;
    __entity?: string;
  };
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

class AuthService {
  login(data: LoginRequest) {
    return baseServiceApi.post<LoginResponse>(
      "/api/v1/auth/email/login",
      data
    );
  }

  getMe() {
    return baseServiceApi.get<AuthResponse>(
      "/api/v1/auth/me"
    );
  }
}

export const authService = new AuthService();