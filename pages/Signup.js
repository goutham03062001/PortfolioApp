import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import SignupImage from "../src/Images/Signup.png";
import AntDesign from "react-native-vector-icons/AntDesign";
const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupFunction = async () => {
    console.log("Clicked on signup button");
    try {
          const res = await fetch('http://localhost:8000/ok',{
            method:'GET',
            headers:{'Content-Type':'application/json'}
          })
          console.log(res);
    } catch (error) {
        console.log('Error Occurred : ',error);
    }
  };
  return (
    <View style={Styles.container}>
      <Text>Signup</Text>
      <View style={[Styles.cardContainer, Styles.shadowProp]}>
        <Image source={SignupImage} style={Styles.imageStyle} />
        <TextInput
          placeholder="Enter your name"
          style={Styles.input}
          onChange={(e) => {
            setName(e.nativeEvent.text);
          }}
        />
        <TextInput
          placeholder="Enter your email"
          style={Styles.input}
          onChange={(e) => {
            setEmail(e.nativeEvent.text);
          }}
        />
        <TextInput
          placeholder="Enter your password"
          style={Styles.input}
          onChange={(e) => {
            setPassword(e.nativeEvent.text);
          }}
        />
        <TouchableOpacity style={Styles.signuBtn} onPress={signupFunction}>
          <Text style={Styles.signupText}>Signup</Text>
          <AntDesign name="arrowright" size={18} />
        </TouchableOpacity>

        <View style={Styles.row}>
          <Text>Already have an account ? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  cardContainer: {
    width: 300,
    height: 500,
    display: "flex",
    justifyContent: "center",
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
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imageStyle: {
    resizeMode: "contain",
    width: "60%",
    height: "30%",
  },
  signuBtn: {
    backgroundColor: "#a762dd",
    width: 200,
    height: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Signup;
