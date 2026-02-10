import { AuthUser } from "../types"

export interface IAuthService {
  login: () => Promise<AuthUser>
  logout?: () => Promise<void>
}
