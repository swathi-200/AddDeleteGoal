import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.ondelete.bind(this, props.id)}
        style={({pressed})=>pressed && styles.pressediten}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,

    backgroundColor: "gray",
  },

  goalText: {
    color: "white",
  },
  pressediten:{
 opacity:0.5
  }
});
