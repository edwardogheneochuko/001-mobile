import { View, Text, Pressable } from "react-native"
import { Redirect } from "expo-router"
import { useAuth } from "@/hooks/useAuth"

export default function Home() {
  const { user, loading, logout } = useAuth()

  if (loading) return <Text>Loading...</Text>
  if (!user) return <Redirect href="/login" />

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl mb-4">
        Welcome {user.email}
      </Text>

      <Pressable
        onPress={logout}
        className="bg-red-500 px-4 py-2 rounded"
      >
        <Text className="text-white">Logout</Text>
      </Pressable>
    </View>
  )
}