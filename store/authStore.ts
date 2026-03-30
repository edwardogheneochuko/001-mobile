import { create } from "zustand"
import { auth } from "@/lib/firebase"
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"

interface AuthState {
  user: User | null
  loading: boolean

  init: () => void
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  init: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false })
    })
  },

  login: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  },

  signup: async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  },

  logout: async () => {
    await signOut(auth)
  },
}))