import { FlatList, StyleSheet, Text } from "react-native";

const ListTodo = (props: IProps) => {
  const todoList = props.todoList

  return (
    <>
      <FlatList
        style={{ marginVertical: 10 }}
        data={todoList}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          return <Text style={styles.todo}>{item.title}</Text>;
        }}
      />
    </>
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
}

export default ListTodo;
