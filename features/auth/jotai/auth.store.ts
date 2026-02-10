import { atom } from "jotai";
import {createMMKV} from "react-native-mmkv"
import { AuthUser } from "../types";

const storage = createMMKV({id: "auth"})
const STORAGE_KEY = "auth_user_v1";

function loadUserFromStorage(): AuthUser | null {
  try {
    const json = storage.getString(STORAGE_KEY)
    return json ? (JSON.parse(json)) : null
  } catch {
    return null
  }
}

function saveUserToStorage(user: AuthUser) {
  if (user) {
    storage.set(STORAGE_KEY, JSON.stringify(user))
  } else {
    storage.remove(STORAGE_KEY)
  }
}

export const userAtom = atom<AuthUser | null>(null);
userAtom.onMount = (setAtom) => {
  console.log('atom is mounted in provider')
  // subscribe: if storage changes from outside (rare), sync
  const onChange = () => {
    setAtom(loadUserFromStorage())
  }
}
export const loadingAtom = atom(false);

// A small effect to persist any change to userAtom:
export const persistUserAtom = atom(
  (get) => get(userAtom),
  (get, set, update: AuthUser | null) => {
    set(userAtom, update);
    if (update) saveUserToStorage(update);
  }
);
