import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProfileIcon from "react-native-vector-icons/MaterialCommunityIcons";
import WeatherIcon from "react-native-vector-icons/MaterialCommunityIcons";
const Navigation = ({navigation}) => {
  return (
    <View style={Styles.container}>

      <View style={Styles.navItem}>
        <TouchableOpacity onPress = { ()=>{navigation.navigate("Dashboard")}}>
          <Text>Home</Text>
        </TouchableOpacity>

        <Icon name="home" size={18} />
      </View>

      <View style={Styles.navItem}>
        <TouchableOpacity onPress = { ()=>{navigation.navigate("Profile")} }>
          <Text>Profile</Text>
        </TouchableOpacity>
        <ProfileIcon name="account-circle" size={18} />
      </View>

      <View style={Styles.navItem}>
        <TouchableOpacity onPress = { () =>{ navigation.navigate("Posts")}}>
        <Text>Posts</Text>
        </TouchableOpacity>
        <ProfileIcon name="post" size={18} />
      </View>

      <View style={Styles.navItem}>
        <TouchableOpacity onPress = { () =>{ navigation.navigate("Weather")}}>
        <Text>Posts</Text>
        </TouchableOpacity>
        <WeatherIcon name="weather-partly-cloudy" size={18} />
      </View>

    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    backgroundColor: "#C3DDDD",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 20,
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Navigation;
