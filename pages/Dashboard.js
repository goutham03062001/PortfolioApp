import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import FirstImage from "../src/Images/First.jpg";
import SecondImage from "../src/Images/Second.jpg";
import Navigation from "./Navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Dashboard = ({navigation}) => {
  const data = [
    {
      name: "Elon musk",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: FirstImage
    },
    {
      name: "Jeff",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image : SecondImage
    },
    {
        name : 'Bill Gates',
        content :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image : FirstImage

    },
    {
        name : 'Kalam',
        content :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image : FirstImage

    },
    {
      name : 'Nambi',
      content :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image : FirstImage

  }
  ];
  return (
    <>
    <Navigation navigation={ navigation}/>
      <ScrollView>
        <View style={Styles.container}>
        
          {data.map((person) => {
            return (
              <>
                <View style={Styles.cardContainer}>
                <MaterialCommunityIcons style = {Styles.top} name = "cards-heart" size={26}/>

                
                  <View style={Styles.cardHeader}>
                    <Image source={person.image} style={Styles.ImageStyle} />
                    <Text style={Styles.cardName}>{person.name}</Text>
                  </View>

                  <View style={Styles.cardBody}>
                    <Text style={Styles.cardContent}>{person.content}</Text>

                    
                    <TouchableOpacity style={Styles.viewMore}>
                      <Text style={Styles.viewMoreText}>View More</Text>
                    </TouchableOpacity>
                    

                  </View>

                </View>
              </>
            );
          })}
        </View>
      </ScrollView>
    </>
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
    height: 410,
    display: "flex",
    justifyContent: "space-between",
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
  cardHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardName: { marginTop: 10 },
  ImageStyle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 75,
  },
  cardContent: {
    textAlign: "justify",
    lineHeight: 25,
    paddingTop: 20,
  },
  viewMore: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    backgroundColor:'#C3DDDD'
  },
  viewMoreText: {
    color: "black",
  },
  top:{
    position:"absolute",
    right:1,
    top:0,
    backgroundColor:"red"
  }
});
export default Dashboard;
