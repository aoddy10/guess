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
    feedback: "",
    remainingNumber: 5
  };

  // function to pic a random number
  generateRandom() {
    return Math.round(Math.random() * 100);
  }

  // function in initialise the game
  init() {
    const secretNumber = this.generateRandom();
    this.setState({
      secret: secretNumber,
      input: "",
      remainingNumber: 5,
      feedback: ""
    });
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
    var remainingTime = this.state.remainingNumber;

    // check answer
    if (userGuess < secretNumber) this.setState({ feedback: "Too small" });
    else if (userGuess > secretNumber) this.setState({ feedback: "Too large" });
    else {
      // alert win to player
      alert("Congratulation, you WIN. The secret number is " + secretNumber);
      // restart the game again
      this.init();
      return;
    }

    // calulate remaining time.
    remainingTime -= 1;
    if (remainingTime == 0) {
      alert(
        "Sorry, you LOSE! The secret number is " +
          secretNumber +
          ". Please try again."
      );
      this.init();
    } else this.setState({ remainingNumber: remainingTime });

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
        <Text style={styles.titleText}>Guess my Number</Text>
        <Text style={styles.remainText}>
          Remaining Time: {this.state.remainingNumber}
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={this.updateInput}
          value={this.state.input}
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
    backgroundColor: "#19324d",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  titleText: {
    fontSize: 32,
    color: "#ff9900",
    padding: 8
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    fontSize: 36,
    textAlign: "center"
  },
  btn: {
    backgroundColor: "lightblue",
    padding: 10,
    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 8
  },
  feedbackText: {
    fontSize: 18,
    color: "red",
    padding: 8
  },
  remainText: {
    fontSize: 18,
    color: "#ff9900",
    padding: 8
  }
});
