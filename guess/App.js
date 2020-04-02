import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

export default class Game extends Component {
  // set initial state
  state = {
    secret: 0,
    input: "",
    feedback: ""
  };

  // function to pic a random number
  generateRandom() {
    return Math.round(Math.random() * 100);
  }

  // function in initialise the game
  init() {
    const secretNumber = this.generateRandom();
    this.setState({ secret: secretNumber });
  }

  // update input state when user put guess number
  updateInput = value => {
    this.setState({
      input: value
    });
  };

  // check value
  checkGues = () => {
    const userGuess = parseInt(this.state.input);
    const secretNumber = this.state.secret;

    if (userGuess < secretNumber) this.setState({ feedback: "Too small" });
    else if (userGuess > secretNumber) this.setState({ feedback: "Too large" });
    else {
      this.setState({
        feedback: "Well done, secret number is " + secretNumber
      });
      // restart the game again
      this.init();
      return;
    }
    return;
  };

  // lifecycle function
  // call when application load it
  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Gues my Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={this.updateInput}
        ></TextInput>
        <TouchableHighlight
          style={styles.btn}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={this.checkGues}
        >
          <Text>Submit Guess</Text>
        </TouchableHighlight>

        <Text style={styles.feedbackText}>{this.state.feedback}</Text>
      </View>
    );
  }
}

// create stylesheet. need it import { StyleSheet} from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgray",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  text: {
    fontSize: 24,
    color: "blue",
    padding: 8
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    fontSize: 48,
    textAlign: "center",
    marginTop: 16
  },
  btn: {
    backgroundColor: "lightblue",
    marginTop: 16,
    padding: 10,
    paddingRight: 40,
    paddingLeft: 40
  },
  feedbackText: {
    fontSize: 24,
    color: "red",
    padding: 8
  }
});
