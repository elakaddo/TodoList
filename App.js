
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import TodoList from './components/TodoList';

export default function App(){
    return (
      <View style={styles.container}>
          <Text style={styles.titre} >Gestion des tâches</Text>
          <View style={styles.taches}>
            <TodoList />
          </View>
      </View>
    );
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  titre : {
    fontWeight : 'bold',
    fontSize : 24,
    textAlign : 'left',
    marginTop : 30,
    marginLeft : 20,
  },
  taches : {
    margin : 30
  }
});
