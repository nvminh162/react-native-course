import { Link } from "expo-router";
import { Text, View } from "react-native";

const AppRoot = () => {
  return (
    <View>
      <Text>Welcome to HomePage Screen</Text>
      <Link href={"/product"}>Go to product</Link>
      <Link href={"/login"}>Go to login</Link>
    </View>
  );
};

export default AppRoot;
