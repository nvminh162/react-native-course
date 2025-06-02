import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  //String
  const [name, setName] = useState<string>("");

  //number
  const [age, setAge] = useState<number>(0);

  //null, undefined, boolean
  const test = null;

  //object, array
  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "nvminh162",
    age: 22,
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Input</Text>
        <TextInput
          value={name}
          onChangeText={(v) => setName(v)}
          autoCapitalize="none"
          style={styles.input}
          // maxLength={2}
          // keyboardType="numeric"
          // multiline
          autoCorrect={false}
        />
      </View>
      <Button title="Add New" />
      <View>
        <Text style={styles.text}>
          from
          <Text style={styles.nvminh162}> {name} </Text>
          with love
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
  nvminh162: {
    color: "green",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
  },
});
