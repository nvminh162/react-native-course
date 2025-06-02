import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import InputTodo from "./components/todo/input.todo";
import ListTodo from "./components/todo/list.todo";

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([
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
  ]);

  return (
    <View style={styles.container}>
      <InputTodo />
      <ListTodo todoList={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});
