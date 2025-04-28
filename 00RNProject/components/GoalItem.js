import {StyleSheet, Text, View, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.onDeleteGoal.bind(this, props.id)}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
    color: '#210644',
  },
});
