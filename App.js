import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString(16).slice(2) },
    ]);
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  const modalHandler = () => {
    setModalIsVisible(true);
  };
  const cancelHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The goal app!</Text>
      <Button title="Add New Goal" color="#c8a7f7" onPress={modalHandler} />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={cancelHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    flex: 1,
    backgroundColor: "#483d8b",
    padding: "5%",
  },
  header: {
    color: "#ffffff",
    fontSize: 32,
    textAlign: "center",
    marginBottom: 15,
  },
  goalsContainer: {
    marginTop: "10%",
    flex: 5,
  },
});
