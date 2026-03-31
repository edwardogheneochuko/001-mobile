import { Text, View, useWindowDimensions } from "react-native"

export default function Screen1() {
  const { height } = useWindowDimensions()

  return (
    <View
      style={{ minHeight: height }}
      className=" bg-black px-4 justify-center items-center"
    >
      <Text className="text-white">open</Text>
    </View>
  )
}