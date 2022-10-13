import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";


export default class Fils extends React.Component {

    constructor(props){
        this.props = props
    }

    render()
    {
        return (
            <View>
                <Text>Le Fils : le button a été pressé {props.count} fois</Text>
                <Button title='Press me' onPress={props.onPressed}/>
            </View>
            )
    }


}