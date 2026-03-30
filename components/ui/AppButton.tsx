import { Pressable, Text } from "react-native"

export default function AppButton({ title, onPress }: any) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-blue-500 p-3 rounded mb-3"
    >
      <Text className="text-white text-center">{title}</Text>
    </Pressable>
  )
}