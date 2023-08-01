import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#145290" }}
        onPress={props.deleteGoalHandler.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "dodgerblue",
  },
  goalText: {
    color: "#ffffff",
    padding: 12,
  },
  pressedItem: {
    opacity: 0.5,
  },
  item: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
});
