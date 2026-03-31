import { View, useWindowDimensions } from "react-native"

export default function Screen3() {
  const { height } = useWindowDimensions()

  return (
    <View
      style={{ minHeight: height }}
      className="justify-center items-center bg-black px-4"
    >
      {/* your content */}
    </View>
  )
}