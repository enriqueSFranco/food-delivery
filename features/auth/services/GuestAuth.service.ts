import uuid from "react-native-uuid";
import { IAuthService } from "./IAuthService";
import { AuthUser } from "../types";

export class GuestAuthService implements IAuthService {
  // private GUEST_KEY = '@guest_user';

  public async login(): Promise<AuthUser> {

    await new Promise(r => setTimeout(r, 250))
    return {
      id: uuid.v4().toString(),
      name: "Guest User",
      provider: "guest",
    }
  }
}
