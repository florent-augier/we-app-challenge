import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { SearchBar } from "react-native-elements";

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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
});
