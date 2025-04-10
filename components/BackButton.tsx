import { useRouter } from "expo-router"
import { Pressable, Text } from "react-native";

type ButtonProps = {
  text: string;
}

export default function SimpleButton( props : ButtonProps ) {
  const router = useRouter();

  return (
    <Pressable style={{
      backgroundColor: "#d9d9d9",
      paddingHorizontal: 60,
      paddingVertical: 20,
      marginTop: 'auto',
      marginBottom: '40%',
      borderRadius: 100,
      boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.25)'
    }} onPress={router.back}>
      <Text style={{ fontFamily: 'Montserrat Regular' }}>{props.text}</Text>
    </Pressable>
  )
}
