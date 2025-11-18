import { v4 as uuidv4 } from "uuid";
import { IAuthService } from "./IAuthService";
import { AuthUser } from "../types";

export class GuestAuthService implements IAuthService {
  public async login(): Promise<AuthUser> {
    await new Promise(r => setTimeout(r, 250))
    return {
      id: uuidv4(),
      name: "Guest User",
      provider: "guest",
    }
  }
}
