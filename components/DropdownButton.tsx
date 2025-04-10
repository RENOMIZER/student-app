import { Text, Pressable, Image } from "react-native";

type DropdownProps = {
  children?: any;
  title: string;
  image?: string;
};

const DropdownButton = (props : DropdownProps) => {
  let icon
  switch (props.image) {
    case 'map':
      icon = require('@/assets/images/map.png')
      break
    case 'must':
      icon = require('@/assets/images/must-have.png')
      break
    case 'guide':
      icon = require('@/assets/images/guide.png')
      break
    case 'faq':
      icon = require('@/assets/images/faq.png')
      break
    case 'food':
      icon = require('@/assets/images/food.jpg')
      break
    case 'stores':
      icon = require('@/assets/images/stores.jpg')
      break
    case 'ent':
      icon = require('@/assets/images/entertainment.png')
      break
  }

  return (
    <Pressable style={{
      backgroundColor: "#d9d9d9",
      width: '100%',
      marginTop: '5%',
      borderRadius: 40,
      boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: 'row',
    }}>
      <Text
        style={{ 
          fontFamily: 'Montserrat Regular',
          fontSize: 20,
          textAlign: 'center',
          alignSelf: 'center',
          marginHorizontal: 'auto',
          flex: 1,
          padding: 20,
        }}
        >{props.title}</Text>
      <Image 
        source={icon}
        style = {{
          alignSelf: 'center',
          justifyContent: 'flex-end',
          width: '35%',
          aspectRatio: '1 / 1',
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
        }}
      />
    </Pressable>
  )
}

export default DropdownButton