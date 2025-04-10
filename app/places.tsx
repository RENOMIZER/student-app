import MenuButton from "@/components/MenuButton";
import BackButton from "@/components/BackButton";
import DefaultScreen from "@/components/DefaultScreen";

export default function Menu() {
  return (
    <DefaultScreen title="Places">
      <MenuButton text="Food" image="food" link="/places/food" />
      <MenuButton text="Stores" image="stores" link="/places/stores" />
      <MenuButton text="Entertainment" image="ent" link="/places/entertainment" />
      <BackButton text="< Back" />
    </DefaultScreen>
  )
}