import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function CardUser({ user }) {
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <View style={styles.card}>
      <Image source={{ uri: user.photo }} style={styles.image} />
      <View style={styles.username}>
        <Text style={styles.cardText}>{user.first_name}</Text>
        <Text style={styles.cardText}>{user.last_name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    margin: 5,
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#ffba39",
  },
  image: {
    width: 50,
    height: 50,
  },
  username: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardText: {
    alignSelf: "center",
    fontWeight: "bold",
  },
});
