import { User } from "@shared/models/user.model";

export interface AuthState {
  access_token: string,
  token_type: string,
  expires_at: Date | null,
  isLoading?: boolean;
  error?: string;
}
