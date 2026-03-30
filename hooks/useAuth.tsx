import { useAuthStore } from "@/store/authStore"

export const useAuth = () => {
  const { user, loading, login, signup, logout } = useAuthStore()
  return { user, loading, login, signup, logout }
}