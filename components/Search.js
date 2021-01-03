import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (search != "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [search]);

  return (
    <Input
      placeholder="Type a name here..."
      onChangeText={(e) => {
        setSearch(e);
      }}
      value={search}
      leftIcon={
        <MaterialIcons name="person-search" size={24} color="#5300C6" />
      }
      leftIconContainerStyle={{ marginHorizontal: 10 }}
      rightIcon={
        !isEmpty ? (
          <MaterialIcons
            name="cancel"
            size={24}
            color="#5300C6"
            onPress={() => setSearch("")}
          />
        ) : (
          <MaterialIcons name="create" size={24} color="#5300C6" />
        )
      }
      rightIconContainerStyle={{ marginRight: 10 }}
      placeholderTextColor={"#82929c"}
      inputContainerStyle={styles.containerInput}
      color={"#ffba39"}
      inputStyle={{ fontWeight: "bold" }}
    />
  );
}

const styles = StyleSheet.create({
  containerInput: {
    padding: 2,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#5300C6",
  },
});
