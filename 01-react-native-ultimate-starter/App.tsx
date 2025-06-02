import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [nameTodo, setNameTodo] = useState<string>("");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn react native 1", key: "nvminh" },
    { id: 2, title: "Learn react native 2", key: "nvminh" },
    { id: 3, title: "Learn react native 3", key: "nvminh" },
    { id: 4, title: "Learn react native 4", key: "nvminh" },
    { id: 5, title: "Learn react native 5", key: "nvminh" },
    { id: 6, title: "Learn react native 6", key: "nvminh" },
    { id: 7, title: "Learn react native 7", key: "nvminh" },
    { id: 8, title: "Learn react native 8", key: "nvminh" },
    { id: 9, title: "Learn react native 9", key: "nvminh" },
    { id: 10, title: "Learn react native 10", key: "nvminh" },
    { id: 11, title: "Learn react native 11", key: "nvminh" },
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
      {/* <ScrollView>
        {todoList.map((todo) => (
          <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
        ))}
      </ScrollView> */}
      <FlatList /* default flatList get key: key is key */
        style={{ marginVertical: 10 }}
        data={todoList}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          /* console.log(data); */
          /* data back example =>
            {
              "index": 0,
              "item": {
                "id": 1,
                "title": "Learn react native 1"
              },
              "separators": {
                "highlight": [Function highlight],
                "unhighlight": [Function unhighlight],
                "updateProps": [Function updateProps]
              }
            }
          */
          /* 
            use Object Destructuring => data = { index, item, separators }
          */
          return (
            <Text
              style={styles.todo}
              // key={item.id}
            >
              {item.title}
            </Text>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
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
