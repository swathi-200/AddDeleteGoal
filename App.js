import { useState } from "react";
import GoalItem from "./Components/goalitem";
import GoalInput from "./Components/Goalinput";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const [modalvisble, setmodalvisble] = useState(false);


  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,

      {text:enteredGoalText,id:Math.random().toString()},
    ]);
    cancelmodal();
  }
function deleteGoalHandler(id)
{
  setCourseGoals(currentCourseGoals=>{
    return currentCourseGoals.filter((goal)=>goal.id!==id);
  });
}
function addmodal()
{
  setmodalvisble(true)
}
function cancelmodal()
{
  setmodalvisble(false)
}
  return (
    <View style={styles.appContainer}>
    
      <Button title="Add a new goal" color="gray" onPress={addmodal}/>
      <GoalInput visible={modalvisble} onAddgoal={addGoalHandler} onCancel={cancelmodal}/>
      <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={(itemData)=>{
          
        return <GoalItem id={itemData.item.id} text={itemData.item.text}  ondelete={deleteGoalHandler}/>
        }} keyExtractor={(item,index)=>{
          return item.id
        }} />
          
            
        
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    
  },

  
  goalsContainer: {
    flex: 4,
  },

 
});
