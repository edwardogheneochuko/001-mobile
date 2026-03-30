import { TextInput } from "react-native"

export default function AppInput(props: any) {
  return (
    <TextInput
      {...props}
      className="border p-3 mb-3 rounded"
    />
  )
}