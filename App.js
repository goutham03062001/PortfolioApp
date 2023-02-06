import React,{useState} from 'react'
import { StyleSheet,View,Text,TextInput,Button ,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Navigation from './pages/Navigation';
import Weather from './pages/Weather';
export default function App(){
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const submitDetails = ()=>{
    Alert.alert(email+ " "+password)
  }
  const Stack = createStackNavigator();
  return (
   <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name = "Signup" component={ Signup }/>
        <Stack.Screen name = "Login" component={ Login }/>
        <Stack.Screen name = "Dashboard" component={ Dashboard }/>
        <Stack.Screen name = "Profile" component={ Profile }/>
        <Stack.Screen name = "Posts" component={ Posts }/>
        <Stack.Screen name = "Weather" component={ Weather }/>
      </Stack.Navigator>
   </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  input:{
    borderWidth:1,
    width:300,
    height:50,
    marginTop:20,
    marginBottom:30,
    paddingLeft:10
  }
})
