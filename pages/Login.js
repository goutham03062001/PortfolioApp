import React,{useState} from 'react'
import {View,Text, Button,TextInput, StyleSheet, TouchableOpacity,Image} from "react-native";
import LoginImage from "../src/Images/Login.png";
const Login = ({navigation}) => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleInput = ()=>{
        console.log("...")
        console.log("Your email is :"+email + " and "+ "your password is : "+password);
        if(email==="abcd@gmail.com" && password==="abcd"){
            navigation.navigate("Dashboard");
        }
    }
  return (
    <View style = {Styles.container}>
        <Text>Login</Text>
        
        <View style = {[Styles.cardContainer,Styles.shadowProp]}>
        <Image source={ LoginImage} style = {Styles.loginImage}/>
        <TextInput placeholder='Enter your name' style = {Styles.input} onChange = { (e)=>{setEmail(e.nativeEvent.text)}}/>
        <TextInput placeholder='Enter your email' style = {Styles.input} onChange = { (e)=>{setPassword(e.nativeEvent.text)}}/>
        <Button style = {Styles.button} title="Login" onPress={ handleInput }/>
        
        <View style = {Styles.row}>
            <Text>Don't have an account? </Text>
           <TouchableOpacity onPress = { ()=>{ navigation.navigate("Signup")}}>
            <Text>Signup</Text>
           </TouchableOpacity>
        </View>

        </View>

        
    </View>
  )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
    ,
    input:{
        width:200,
        height:50,
        borderWidth:1,
        padding:10,
        marginTop:20,
        marginBottom:20
    },
    cardContainer:{
        width:300,
        height:500,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '90%',
        marginVertical: 10,
    },
    shadowProp:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    row:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20,
    },
    loginImage : {
        width:"60%",
        height:"30%",
        resizeMode:"contain"
    }
})

export default Login