import React,{useState,useEffect} from 'react'
import {View, Text,StyleSheet, TouchableOpacity, ScrollView,Image, TextInput} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Weather = () => {
    const[location,setLocation] = useState({});
    const[current,setCurrent] = useState({});
    const[condition,setCondition] = useState({})
    const[isClicked,setIsClicked] = useState(false);
    const[cityName,setCityName] = useState('');
    
    const viewData = async ()=>{
        // console.log("You are trying to view weather data")
        setIsClicked(!isClicked)
        const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=dbf44e0c64aa4751a42123100230502&q='+cityName+'&aqi=no')
        .then((res)=>{
            setLocation(res.data.location);
            setCurrent(res.data.current);
            setCondition(res.data.current.condition);
        })
        .catch((err)=>{console.log("Error Occurred")})
    }
    console.log(cityName);
  return (
    <View style = {Styles.container}>
       
       <View>
       <TextInput 
         placeholder='Enter city name'
         style = {Styles.input} 
         onChangeText={(text)=>{setCityName(text)}}
         value = {cityName}
         />
        <TouchableOpacity style = {Styles.weatherBtn} onPress = {viewData} >
            <Text>View Weather</Text>
            
        </TouchableOpacity>
       </View>
       {
        isClicked && (<>

            <ScrollView>
            <Text style = {Styles.main_card}> <Icon name='location-outline' size ={18}/>  Location : {location.name} </Text>
            <Text style = {Styles.main_card}><MaterialCommunityIcons name='earth' size ={18}/> Region : {location.region} </Text>
            <Text style = {Styles.main_card}> <MaterialCommunityIcons name='latitude' size ={18}/>   Latitude : {location.lat} </Text>
            <Text style = {Styles.main_card}> <MaterialCommunityIcons name='longitude' size ={18}/>Longitude : {location.lon} </Text>
            <Text style = {Styles.main_card}> <MaterialCommunityIcons name='clock-outline' size ={18}/>   Local Time : {location.localtime} </Text>

            {/* <Image source = {state.current.condition.icon}/> */}

            <Text style = {Styles.main_card}> <MaterialCommunityIcons name='temperature-celsius' size ={18}/>   Temp_c : {current.temp_c}</Text>
            <Text style = {Styles.main_card}> <MaterialCommunityIcons name='temperature-fahrenheit' size ={18}/> Temp_f : {current.temp_f}</Text>
            <Text style = {Styles.main_card}>Text : {condition.text}</Text>
            <Text style = {Styles.main_card}>Code : {condition.code}</Text>

                {/* <Image source = {condition.icon} style = {Styles.image}/> */}
            </ScrollView>
        </>)
       }
    </View>
  )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    main_card:{
    width: 300,
    height:50,
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical:15,
    marginVertical: 10,
    },
    weatherBtn:{
        width:200,
        height:50,
        backgroundColor:"#C3DDDD",
        display:"flex",
        justifyContent: 'center',
        alignItems:'center',
        marginVertical:30

    },
    image:{
        width:30,
        height:30,
        resizeMode:'contain'
    },
    input:{
        width:200,
        height:50,
        borderWidth:1,
        marginVertical:50
    }
})
export default Weather