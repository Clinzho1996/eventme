import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View className="w-full bg-[#F5F5F5] p-4 rounded-xl mt-6 flex flex-row justify-start  items-center">
      <Ionicons name="search-outline" size={24} color="gray" />
      <TextInput
        placeholder="What event are you looking for..."
        placeholderTextColor={"gray"}
        className="font-medium text-sm ml-3 flex-1"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
