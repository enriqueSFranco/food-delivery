import { useAtomValue, useSetAtom } from "jotai";
import { loadingAtom, userAtom } from "../jotai/auth.store";
import { loginGuestAtom, logoutAtom } from "../jotai/auth.actions";

export function useAuthStore() {
  const user = useAtomValue(userAtom)
  const loading = useAtomValue(loadingAtom);

  const loginGuest = useSetAtom(loginGuestAtom);
  const logout = useSetAtom(logoutAtom);

  return {
    isGuest: user?.provider === 'guest',
    user,
    loading,
    isAuthenticated: !!user && user?.provider !== 'guest',
    loginGuest,
    logout
  }
}
