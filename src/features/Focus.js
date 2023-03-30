import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors.js';
import {RoundedButton} from '../components/RoundedButton.js';
import {spacing} from '../utils/sizes.js';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        onChangeText={setSubject} 
        label="What Would You Like To Focus On?"/>
        <View style={styles.button}>
          <RoundedButton title='+' size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.s,
  },
  inputContainer: {
    padding: spacing.l,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});