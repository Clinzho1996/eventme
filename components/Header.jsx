import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex flex-row justify-between gap-8 items-center">
      <View className="flex flex-row justify-start items-center">
        <View className="mr-2">
          <Image
            source={require("../assets/images/profile.png")}
            className="w-[50px] h-[50px] rounded-full max-h-fit max-w-fit"
          />
        </View>
        <View className="flex-col flex pt-2">
          <Text className="text-gray-600 ">Good Morning</Text>
          <Text className="font-psemibold text-lg">Confidence Clinton 😊</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity className="p-3 rounded-full border-[1px] border-gray-400">
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
