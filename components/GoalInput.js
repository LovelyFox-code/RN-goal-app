import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalState] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalState(enteredText);
  };
  const addGoalHandler = () => {
    if (enteredGoalText !== "") {
      props.onAddGoal(enteredGoalText);
      props.onCancel();
      setEnteredGoalState("");
    }
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
        <TextInput
          placeholder="setup your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Close" onPress={props.onCancel} color={"#ff1493"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal!"
              onPress={addGoalHandler}
              color={"#a353c5"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#483d8b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "80%",
    marginRight: 8,
    padding: 16,
    color: "#120138",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: "35%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
});
