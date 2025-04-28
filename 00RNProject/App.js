import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!</Text>
      <Text style={styles.text}>Hello World!!</Text>
      <Button title="Click Me" onPress={() => alert("Button Pressed!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 20,
    margin: 20,
    color: "red",
    borderColor: "blue",
    borderWidth: 1,
  },
});
