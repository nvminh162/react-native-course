import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const InputTodo = (props: IProps) => {
  const [nameTodo, setNameTodo] = useState<string>("");

  const { addTodo } = props;

  const handleAddNewTodo = () => {
    if (!nameTodo) {
      Alert.alert("Lỗi", "Thông tin không hợp lệ!", [
        {
          text: "CANCEL",
          style: "cancel",
          onPress: () => console.log("KO con dê"),
        },
        {
          text: "OK",
          style: "default",
          onPress: () => console.log("Ok con dê"),
        },
      ]);
      return;
    }
    addTodo(nameTodo);
    setNameTodo("");
  };

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
        <Button
          title="Add New"
          color={"red"}
          onPress={() => handleAddNewTodo()}
        />
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

interface IProps {
  addTodo: (v: string) => void;
}

export default InputTodo;
