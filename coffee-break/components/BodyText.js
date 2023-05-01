import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BodyText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Learn</Text>
      <Text style={styles.p}>Choose part of the body</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  h1: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 15,
  },
  p: {
    fontSize: 18,
  },
});

export default BodyText;
