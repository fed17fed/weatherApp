import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Получение погоды...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
    maxWidth: 480,
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
