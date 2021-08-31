import React, { useState,useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import {Card,FAB} from 'react-native-paper';
const mydata=[
    {id:1,title:'title1',description:'descriptoin1'},
    {id:2,title:'title2',description:'descriptoin2'},
    {id:3,title:'title3',description:'descriptoin3'},
    {id:4,title:'title1',description:'descriptoin1'},
    {id:5,title:'title2',description:'descriptoin2'},
    {id:6,title:'title3',description:'descriptoin3'},
    {id:7,title:'title1',description:'descriptoin1'},
    {id:8,title:'title2',description:'descriptoin2'},
    {id:9,title:'title3',description:'descriptoin3'},
]

const renderData = (item) => {
    return(
        <Card style = {styles.cardStyle}>
            <Text style={{fontSize:25}}>{item.title}</Text>
            <Text>{item.description}</Text>
        </Card>
    )
    
}
export default function Home(props) {
    
    return (
        <View style={{flex:1}}> 
            <FlatList
            data={mydata}
            renderItem = {({item}) => {
                return renderData(item)
            }}
            keyExtractor = { item => item.id}
        />
        <FAB
            style={styles.fab}
            small={false}
            icon="plus"
            onPress={() => props.navigation.navigate("Create")}
        />
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    cardStyle: {
      padding:10,
      margin:10
      
    },
    fab: {
        position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    }
    
  });
