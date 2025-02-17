import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import React from "react";
import {Stack , useRouter} from "expo-router"

import {COLORS, icons, images, SIZES, FONT} from "../constants"
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const router = useRouter()

  const handleLogin = () => {
    router.push(`/login/login`)
  };

  const handleSignup = () => {
    router.push(`/login/signup`)
  };
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                
                headerTitle: ""
            }}/>
    
    <View style={styles.container}>
      {/* <Image source={require("../../assets/icons/logo.jpg")} style={styles.logo} /> */}
      <Image source={require("../assets/images/welcomeImage.jpg")} style={styles.bannerImage} />
      <Text style={styles.title}>Welcome to Recruitment Hub</Text>
      <Text style={styles.subTitle}>
        A one place solution for talent searching and hiring.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: COLORS.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 40,
    fontFamily: FONT.medium,
    paddingHorizontal: 20,
    textAlign: "center",
    color: COLORS.primary,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: COLORS.secondary,
    fontFamily: FONT.regular,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: COLORS.primary,
    width: "80%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONT.medium,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: FONT.medium,
  },
});