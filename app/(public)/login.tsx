import { View, Text } from "react-native"
import React, { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import AppInput from "@/components/ui/AppInput"
import AppButton from "@/components/ui/AppButton"
import { Link } from "expo-router"

export default function Login() {
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View className="flex-1 justify-center p-5 bg-white">
      <Text className="text-2xl mb-5">Login</Text>

      <AppInput placeholder="Email" value={email} onChangeText={setEmail} />
      <AppInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AppButton title="Login" onPress={() => login(email, password)} />

      <Link href="/signup" className="mt-4">
        <Text>Create account</Text>
      </Link>
    </View>
  )
}