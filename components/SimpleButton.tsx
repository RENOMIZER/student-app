import { Image, Pressable, Text } from "react-native";
import { Href, Link } from 'expo-router';

type ButtonProps = {
  text: string;
  link: Href;
}

export default function SimpleButton( props : ButtonProps ) {
  return (
    <Link href={props.link} asChild>
      <Pressable style={{
        backgroundColor: "#d9d9d9",
        paddingHorizontal: 60,
        paddingVertical: 20,
        marginTop: 'auto',
        marginBottom: '40%',
        borderRadius: 100,
        boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.25)'
      }}>
        <Text style={{ fontFamily: 'Montserrat Regular' }}>{props.text}</Text>
      </Pressable>
    </Link>
  )
}
