import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {View, Text, StyleSheet,ScrollView,TextInput,Button, TouchableOpacity} from "react-native"
const Posts = () => {

    const[task,setTask] = useState('');
    const[id,setId] = useState(1);
    const[doTask,setDoToTask] = useState([]);
    // console.log('Your task name : '+task);
    
    const addFunction = ()=>{
        
        let myId = id;
        let myNewArr = [{myId:id,task},...doTask];
        setDoToTask(myNewArr);
        setId(id+1);
        console.log("Your id is : "+id) 
        
    }
  return (
   <>
     <View style = {Styles.container}>
        <Text>Posts Page</Text>
        <TextInput placeholder='Enter your task' style = {Styles.input} onChange = { (e)=>{setTask(e.nativeEvent.text)}}/>
        <TouchableOpacity style = {Styles.taskBtn} onPress = { addFunction}>
            <Text>Add Task</Text>
        </TouchableOpacity>
    </View>

    <ScrollView>
    <View style = {Styles.secondContainer}>
       {
         doTask.length>0 && (doTask.map(item=>{
            return(<>
               <View style = {Styles.taskContainer}>
               <Text>{item.myId}</Text>
                <Text>{item.task}</Text>
                <Text>{item.desc}</Text>
               </View>
            </>)
         }))
       }
    </View>
    </ScrollView>


   </>
  )
}
const Styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"25%",
        display:'flex',
        flexDirection:"column",
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:"#C3DDDD"
    },
    secondContainer:{
        width:"100%",
        height:"100%",
        display:'flex',
        flexDirection:"column",
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:"#39E7CC"
    },
    input:{
        width:300,
        height:40,
        borderWidth:1,
        padding:10,
        marginTop:20
    },
    taskBtn:{
        marginTop:20,
        backgroundColor:"#B998D3",
        width:150,
        height:30,
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    taskContainer:{
        width:300,
        height:150,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '90%',
        marginVertical: 10,
    }
})
export default Posts