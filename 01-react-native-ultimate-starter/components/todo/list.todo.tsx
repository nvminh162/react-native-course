import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ListTodo = (props: IProps) => {
  const { todoList, deleteTodo } = props;

  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        style={{ marginVertical: 10 }}
        data={todoList}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.todo}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 10,
  },
});

interface IProps {
  todoList: ITodo[];
  deleteTodo: (id: string) => void;
}

export default ListTodo;
