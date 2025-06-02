import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nameTodo, setNameTodo] = useState<string>("");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn react native 1" },
    { id: 2, title: "Learn react native 2" },
    { id: 3, title: "Learn react native 3" },
    { id: 4, title: "Learn react native 4" },
    { id: 5, title: "Learn react native 5" },
    { id: 6, title: "Learn react native 6" },
    { id: 7, title: "Learn react native 7" },
    { id: 8, title: "Learn react native 8" },
    { id: 9, title: "Learn react native 9" },
    { id: 10, title: "Learn react native 10" },
    { id: 11, title: "Learn react native 11" },
  ]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Input</Text>
        <TextInput
          value={nameTodo}
          onChangeText={(v) => setNameTodo(v)}
          autoCapitalize="none"
          style={styles.input}
          // maxLength={2}
          // keyboardType="numeric"
          // multiline
          autoCorrect={false}
        />
      </View>
      <Button title="Add New" color={"red"} onPress={() => alert(nameTodo)} />
      <View>
        <Text style={styles.text}>
          Typing ...
          <Text style={styles.todoName}> {nameTodo} </Text>
        </Text>
      </View>
      <ScrollView>
        {todoList.map((todo) => (
          <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
    marginVertical: 20,
  },
  todoName: {
    color: "green",
  },
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
  },
});
