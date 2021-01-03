import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Search from "./components/Search";
import CardUser from "./components/CardUser";
import { StyleSheet, LogBox, SafeAreaView } from "react-native";

import allUsers from "./mock.json";
import { ScrollView } from "react-native-gesture-handler";

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(allUsers);
  }, []);

  const handleSearch = function (event) {
    var searchQuery = event.toLowerCase();
    var displayedUsers = allUsers.filter(function (el) {
      var searchValue = el.first_name.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1;
    });

    setUsers(displayedUsers);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search handleSearch={handleSearch} />
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
