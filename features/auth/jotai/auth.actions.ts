import { atom } from "jotai";
import { loadingAtom, persistUserAtom } from "./auth.store";
import { GuestAuthService } from "../services/GuestAuth.service";

const guestAuthService = new GuestAuthService()

export const loginGuestAtom = atom(null, async (get, set) => {
  set(loadingAtom, true)
  try {
    const user = await guestAuthService.login()
    console.log(`loginGuestAtom: ${user}`)
    set(persistUserAtom, user)
  } catch (error) {
    console.error("loginGuestAtom error:", error)
  } finally {
    set(loadingAtom, false);
  }
})

export const logoutAtom = atom(null, (get, set) => {
  set(persistUserAtom, null)
})

// Merge Guest -> Real Account
// UX: show “Guardar tu carrito antes de crear cuenta” y explicar que al crear cuenta mantendrás todo.
// const mergeGuestWithProviderAtom = () => {}
