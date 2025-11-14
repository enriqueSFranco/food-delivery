import { v4 as uuidv4 } from "uuid";
import { AuthUser } from "../jotai/auth.store";
import { IAuthService } from "./IAuthService";

export class GuestAuthService implements IAuthService {
  public login(): Promise<AuthUser> {
    return Promise.resolve({
      id: uuidv4(),
      name: "Guest User",
      provider: "guest",
    })
  }
}
