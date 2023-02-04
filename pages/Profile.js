import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FirstImage from "../src/Images/First.jpg";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const Profile = () => {
  const data = [
    {
      name: "Elon Musk",
      country: "Inida",
      email: "abcd@gmail.com",
      tagline: "curiosity kills ",
      description: "A noob develooper",
    },
  ];
  return (
    <View style={Styles.container}>
    <Text>Your Profile</Text>
      <View style={Styles.cardContainer}>
      <Text style = {Styles.topRight}>
        <MaterialCommunityIcons name = "toggle-switch-off" size={32}/>
      </Text>
        <Image source={FirstImage} style={Styles.imageStyle} />

        {data.map((item) => {
          return (
            <>
              <View style={Styles.profileContainer}>
                <Text>your name: </Text>
                <Text>{item.name}</Text>
              </View>
              <View style={Styles.profileContainer}>
                <Text>country of origin:</Text>
                <Text>{item.country} </Text>
              </View>
              <View style={Styles.profileContainer}>
                <Text>your email : </Text>
                <Text>{item.email}</Text>
              </View>
              <View style={Styles.profileContainer}>
                <Text>your tagline :</Text>
                <Text>{item.tagline} </Text>
              </View>

              <View style = {Styles.btn_Container}>
                <TouchableOpacity>
                    <Text style = {Styles.editBtn}>Edit </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style = {Styles.deleteBtn}>Delete </Text>
                </TouchableOpacity>
              </View>
            </>
          );
        })}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "90%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  profileContainer: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
   
  },
  btn_Container:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent: 'space-between',
    marginTop:20
  },
  editBtn:{
    backgroundColor:'black',
    width:80,
    height:30,
    color:'white',
    padding:5,
    textAlign:'center',
    borderRadius:10
  },
  deleteBtn:{
    backgroundColor:'red',
    width:80,
    height:30,
    color:'white',
    padding:5,
    textAlign:'center',
    borderRadius:10
  },
  topRight:{
    position:"absolute",
    top:2,
    right:2
  }
});
export default Profile;
