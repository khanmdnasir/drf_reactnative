import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button } from 'react-native';

export default function Create() {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return (
        <View>
            <TextInput
                style={styles.input}
                label="Title"
                onChangeText={text => setTitle(text)}
                value={title}
                mode="outlined"
            />
            <TextInput
                style={styles.input}
                label="Description"
                onChangeText={text => setDescription(text)}
                value={description}
                mode="outlined"
                multiline
            />
            <Button style = {{margin:10}}
            icon="pencil"
            mode="contained"
            onPress= {() => console.log("pressed")}
            >
                Insert Article
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        padding:10,
        margin:10
    }
})
