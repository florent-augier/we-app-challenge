import React from "react";
import "react-native-gesture-handler";
import Search from "./components/Search";
import CardUser from "./components/CardUser";
import { StyleSheet, LogBox, SafeAreaView } from "react-native";

import users from "./mock.json";
import { ScrollView } from "react-native-gesture-handler";

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <ScrollView>
        {users.map((user, i) => (
          <CardUser key={i} user={user} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
