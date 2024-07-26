import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Home = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 1)"]}
        style={styles.gradient}
      />
      <StatusBar style="light" />
      <View>
        <Text className="text-white font-psemibold text-5xl text-center">
          Welcome to Eventme
        </Text>
        <Text className="text-center text-gray-300 text-xl">
          Discover local events and festivals happening around you!
        </Text>
        <View className="mt-8">
          <TouchableOpacity
            className="bg-white w-full p-5 rounded-lg"
            onPress={() => router.push("/explore")}
          >
            <Text className="text-center text-lg font-bold">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#202020] w-full p-5 rounded-lg mt-3">
            <Text className="text-center text-gray-300 text-lg font-medium">
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageBackground: {
    width: width,
    flex: 1,
    justifyContent: "flex-end",
    height: height,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});
