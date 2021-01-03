import React from "react";
import Search from "./components/Search";
import CardUser from "./components/CardUser";
import { StyleSheet, Text, View, LogBox, SafeAreaView } from "react-native";
import "react-native-gesture-handler";

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      {/* <CardUser /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
