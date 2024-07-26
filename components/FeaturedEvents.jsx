import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const FeaturedEvents = () => {
  return (
    <View className="mt-4">
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-lg font-psemibold">Featured</Text>
        <TouchableOpacity>
          <Text className="text-lg text-[#C24B25]">See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedEvents;

const styles = StyleSheet.create({});
