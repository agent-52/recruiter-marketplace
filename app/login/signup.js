import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView
  } from "react-native";
  import React, { useState } from "react";

import {Stack,useRouter } from "expo-router";
import {COLORS, icons, images, SIZES, FONT} from "../../constants"
  
  import Ionicons from "react-native-vector-icons/Ionicons";
  import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  import { useNavigation } from "@react-navigation/native";
  
  const SignupScreen = () => {
    const router = useRouter()
    const [secureEntery, setSecureEntery] = useState(true);
  
    const handleGoBack = () => {
        router.push(`/`)
    };
    const handleSignUp = () =>{
        router.push(`/screens/mainScreen`)
    }
    const handleLogin = () => {
        router.push(`/login/login`)
    };
  
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
                            <Stack.Screen
                            options={{
                                headerStyle:{backgroundColor: COLORS.lightWhite},
                                headerShadowVisible: false,
                                headerShown: false,
                                headerTitle: ""
                            }}/>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
          <Ionicons
            name={"arrow-back-outline"}
            color={COLORS.primary}
            size={25}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Let's get</Text>
          <Text style={styles.headingText}>started</Text>
        </View>
        {/* form  */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name={"mail-outline"} size={30} color={COLORS.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor={COLORS.secondary}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons name={"lock"} size={30} color={COLORS.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor={COLORS.secondary}
              secureTextEntry={secureEntery}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureEntery((prev) => !prev);
              }}
            >
              <SimpleLineIcons name={"eye"} size={20} color={COLORS.secondary} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons
              name={"screen-smartphone"}
              size={30}
              color={COLORS.secondary}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your phone no"
              placeholderTextColor={COLORS.secondary}
              secureTextEntry={secureEntery}
              keyboardType="phone-pad"
            />
          </View>
  
          <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleSignUp}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.continueText}>or continue with</Text>
          <TouchableOpacity style={styles.googleButtonContainer}>
            <Image
              source={require("../../assets/images/google.png")}
              style={styles.googleImage}
            />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text style={styles.accountText}>Already have an account!</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.signupText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </SafeAreaView>
    );
  };
  
  export default SignupScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      padding: 20,
    },
    backButtonWrapper: {
      height: 40,
      width: 40,
      backgroundColor: COLORS.gray,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      marginVertical: 20,
    },
    headingText: {fontSize: 32,
      color: COLORS.primary,
      fontFamily: FONT.medium,
    },
    formContainer: {
      marginTop: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: COLORS.secondary,
      borderRadius: 100,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      padding: 2,
      marginVertical: 10,
    },
    textInput: {
      flex: 1,
      paddingHorizontal: 10,
      fontFamily: FONT.regular,
    },
    forgotPasswordText: {
      textAlign: "right",
      color: COLORS.primary,
      fontFamily: FONT.medium,
      marginVertical: 10,
    },
    loginButtonWrapper: {
      backgroundColor: COLORS.primary,
      borderRadius: 100,
      marginTop: 20,
    },
    loginText: {
      color: COLORS.white,
      fontSize: 20,
      fontFamily: FONT.medium,
      textAlign: "center",
      padding: 10,
    },
    continueText: {
      textAlign: "center",
      marginVertical: 20,
      fontSize: 14,
      fontFamily: FONT.regular,
      color: COLORS.primary,
    },
    googleButtonContainer: {
      flexDirection: "row",
      borderWidth: 2,
      borderColor: COLORS.primary,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      gap: 10,
    },
    googleImage: {
      height: 20,
      width: 20,
    },
    googleText: {
      fontSize: 20,
      fontFamily: FONT.medium,
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
      gap: 5,
    },
    accountText: {
      color: COLORS.primary,
      fontFamily: FONT.regular,
    },
    signupText: {
      color: COLORS.primary,
      fontFamily: FONT.bold,
    },
  });