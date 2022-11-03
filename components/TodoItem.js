import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity,} from "react-native";
import { Image } from "react-native";


export default function TodoItem (props) {

    const [done, setDone] = useState(props.item.done);
    const changeSwitch = (id) => {
        props.changeItem(id);
        setDone(!done);
    }
    useEffect(() => {
        setDone(props.item.done)
      }, [props.item.done])

     return (
            <View style={styles.element}>
                    <View style={styles.elementGauche}>
                        <Switch 
                                value = {done}
                                onValueChange = {(state) => { changeSwitch(props.item.id)}}/>
                            
                        <Text style={[styles.tache, {textDecorationLine: done ? 'line-through' : 'none'}]}> 
                            {props.item.id} - {props.item.content}
                        </Text>
                    </View>
                    <TouchableOpacity  style={styles.elementDroite} onPress={() =>props.deleteTodo(props.item.id)}>
                        <Image source={{uri : ('https://cdn-icons-png.flaticon.com/512/561/561125.png')}} style={{width : 30, height: 30 }}/>
                    </TouchableOpacity>
            </View>
        )
    
}

const styles = StyleSheet.create({
    element : {
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginTop : 15,
        backgroundColor : '#fff',
        padding : 10,
        borderRadius : 7,
        borderStyle : "solid",
        borderWidth : 2,
        borderColor : 'black',
    },
    elementGauche:{
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap'
    },
    elementDroite:{
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap'
    },
    tache :{
        fontSize : 16,
        marginLeft : 10
    },
});


