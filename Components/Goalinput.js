import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddgoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* <Image style={styles.image} source={require("../assets/icon.png")} /> */}
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

    alignItems: "center",

    padding: 16,
    backgroundColor: "blue",
  },

  TextInput: {
    borderWidth: 1,

    borderColor: "#cccccc",
    width: "100%",
    color: "#120438",
    backgroundColor:"#e4d0ff",
     width:"100%",
    padding: 10,
  },
  buttoncontainer: {
    flexDirection: "row",
  },

  button: {
    width: 100,
    marginHorizontal: 8,
    paddingTop: 10,
  },
  image: {
    width: "10%",
    height: "10%",
  },
});
