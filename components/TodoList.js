import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, FlatList, Switch, useColorScheme } from 'react-native';


import todoData from '../helpers/TodoData';
import TodoItem from './TodoItem';

export default function TodoList(){

   
    const [todos, setTodos]= useState(todoData)
    const[count, setCount] = useState(todos.filter((item) => item.done===true).length)
    const [selectAll, setSelectAll] = useState(
        todos.filter((item) => item.done).length === todos.length
      );
    //change Item
    const changeItem = (id) => {
        const copyTodos = todos.map((item)=>{
            if(item.id==id) item.done = !item.done;
            return item;
        });
        setTodos(copyTodos);
        setCount(copyTodos.filter(item=>item.done==true).length)
    }

    //Delete Item
    const deleteTodo = (id) => {
        const newTodos = todos.filter(item => item.id != id)
        setTodos(newTodos)
        setCount(newTodos.filter(item => item.done).length)
      }

      const [text, onChangeText] =useState("");

      const addNewTodo = () => {
        if (text != "")
        {
            const newList = [...todos, {id: Math.max(...todos.map(item => item.id)) + 1, content:text, done:false}];
            setTodos(newList)
            setCount(newList.filter(item=> item.done).length)
            onChangeText("");
        }
        else console.log("Remplir le inputText");

      }

    const checkAll = () => {
        let temp = todos.map((item)=>{
            return {...item, done:true};
        });
        setTodos(temp);
        setCount(todos.length);
    }
    const checkNone = () => {
        let temp = todos.map((item)=>{
            return {...item, done:false};
        });
        setTodos(temp);
        setCount(todos.length);
    }
    const showDoneItems = () =>{
        const newTodos = todoData.filter(item => item.done === true)
        setTodos(newTodos)
        setCount(newTodos.length)
    }
    const showUnDoneItems = () =>{
        const newTodos = todoData.filter(item => item.done === false)
        setTodos(newTodos)
        setCount(0)
    }
    const showAll = () =>{
        setCount(todoData.filter(item => item.done===true).length)
        setTodos(todoData)
    }
    
    return (
        <View>
                    <View style={styles.addView}>
                    <TextInput
                            style = {styles.input}
                            onChangeText={onChangeText}
                            placeholder='saisir ici un nouvel item'
                            onSubmitEditing={addNewTodo}
                            value={text}
                            />
                        <Button 
                            style = {styles.btn}
                            title="New"
                            onPress={()=>addNewTodo()}
                        />
                    </View>
                  <FlatList
                         style={{ paddingLeft: 10 }}
                         data={todos}
                         renderItem={({item}) => 
                                <TodoItem item={item} 
                                changeItem={changeItem} 
                                deleteTodo={deleteTodo}/>}
                     />
                     <Text style={{margin : 10,alignContent:"center"}}>Nombre de tâche réalisées : {count}</Text>
                    <View style = {styles.filters}>
                        <Button 
                                style = {styles.btn}
                                title="Check None"
                                onPress={()=> checkNone()}
                            />
                        <Button 
                                style = {styles.btn}
                                title="Check All"
                                onPress={()=>checkAll()}
                            />
                         <Button 
                                style = {styles.btn}
                                title="Tâches faites"
                                onPress={()=>showDoneItems()}
                            />
                              <Button 
                                style = {styles.btn}
                                title="Tâches non faites"
                                onPress={()=>showUnDoneItems()}
                            />
                            <Button 
                                style = {styles.btn}
                                title="Tous les tâches"
                                onPress={()=>showAll()}
                            />
                    </View>
        </View>
      
    )
}

const styles = StyleSheet.create({
    addView:{
        alignItems : 'center',
        flexDirection : 'row',
    },
    input: {
      height: 40,
      width:300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius : 7
    },
    btn:{
        borderWidth : 1,
        borderRadius : 20,
        width : 100,
        backgroundColor : "#ff5496",
    },
    filter:{
        alignItems : 'center',
        flexDirection : 'row',
    }
  });