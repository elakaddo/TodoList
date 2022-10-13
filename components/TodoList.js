import { useSchema } from "@graphql-yoga/node";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, FlatList, Switch } from 'react-native';

import todoData from "../helpers/todoData"
import TodoItem from "./TodoItem";

export default function TodoList()
{
    /**useState */
    const[todoList, setTodoList] = useState(todoData)
    const[count, setCount] = useState(todoData.length)

    /**functions  */
    const changeItem = (id) => {
        const copyTodoList = todoList.map((item) =>{
            if(item.id == id) item.done = !item.done;
            return item;
        } );
        setTodoList(copyTodoList);
        setCount(
            copyTodoList.filter( (item) => item.done==true).length
        );
    }
    return (
        <View>
                <FlatList
                        style= {{paddingLeft:10}}
                        data={todoData}
                        renderItem= { ({item}) => <TodoItem item={item} changeItem={changeItem}/>}
                 />
                 <Text style={{marginTop:20}} >Nombre de Tâches  : {count}</Text>
          
        </View>
        
    )
}
