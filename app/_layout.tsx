import { Stack } from "expo-router"
import { useEffect } from "react"
import { useAuthStore } from "@/store/authStore"
import "@/global.css"

export default function RootLayout() {
  const init = useAuthStore((state) => state.init)

  useEffect(() => {
    init()
  }, [])

  return <Stack screenOptions={{ headerShown: false }} />
}