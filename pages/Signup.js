import React from 'react'
import {View,Text, Button,TextInput, StyleSheet,TouchableOpacity,Image} from "react-native";
import SignupImage from "../src/Images/Signup.png"
const Signup = ({navigation}) => {
  return (
    <View style = {Styles.container}>
        <Text>Signup</Text>
        <View style = {[Styles.cardContainer,Styles.shadowProp]}>
        <Image source = {SignupImage} style={Styles.imageStyle}/>
        <TextInput placeholder='Enter your name' style = {Styles.input}/>
        <TextInput placeholder='Enter your email' style = {Styles.input}/>
        <TextInput placeholder='Enter your password' style = {Styles.input}/>
        <Button title="Signup" onPress={ ()=>{console.log("Clicked on Signup")}}/>
        
        <View style = {Styles.row}>
            <Text>Already have an account ? </Text>
            <TouchableOpacity onPress = { ()=>{ navigation.navigate("Login")}}>
            <Text>Login</Text>
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
        alignItems:"center",
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
        alignItems:"center",
        marginTop:20
    },
    imageStyle:{
        resizeMode:'contain',
        width:"60%",
        height:"30%"
    }
})

export default Signup