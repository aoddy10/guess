import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Game extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.text}>Gues my number</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    color: "blue"
  }
});
