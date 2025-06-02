import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const InputTodo = () => {
  const [nameTodo, setNameTodo] = useState<string>("");

  return (
    <>
      <View>
        <Text style={styles.text}>Input</Text>
        <TextInput
          style={styles.input}
          value={nameTodo}
          onChangeText={(v) => setNameTodo(v)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title="Add New" color={"red"} onPress={() => alert(nameTodo)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
  },
});

export default InputTodo;
