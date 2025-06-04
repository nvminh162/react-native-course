import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

const AppRoot = () => {
  const handleLogin = () => {
    alert("Login");
    router.navigate("/like/like.detail");
  };

  return (
    <View>
      <Text>12345</Text>

      <Link href={"/nvminh162"}>Go to nvminh162</Link>

      <Link href={"/like/like.detail"} asChild>
        <Button title="Go to Like Detail" />
      </Link>

      <View style={{ margin: 20 }}>
        <Button title="To Go Login Alert" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default AppRoot;
