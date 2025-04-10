import DefaultScreen from "@/components/DefaultScreen";
import MenuButton from "@/components/MenuButton";
import BackButton from "@/components/BackButton";

export default function Menu() {
  return (
    <DefaultScreen title="Maps">
      <MenuButton text="2D Maps" link="/maps" />
      <MenuButton text="3D Maps" link='/maps' />
      <BackButton text="< Back"/>
    </DefaultScreen>
  )
}