import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { data, featuredData, popularData } from "../constants/data";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PopularEventCard = ({ item }) => {
  return (
    <TouchableOpacity className="py-3 px-5 rounded-xl bg-[#F5F5F5] mr-2">
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};
const PopularEvents = () => {
  const [likedItems, setLikedItems] = useState({});

  const handleLike = async (item) => {
    const isLiked = likedItems[item.id];
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [item.id]: !isLiked,
    }));

    const savedCards = await AsyncStorage.getItem("likedEventCards");
    let parsedCards = savedCards ? JSON.parse(savedCards) : [];

    if (!isLiked) {
      // Add the card to local storage
      parsedCards.push(item);
    } else {
      // Remove the card from local storage
      parsedCards = parsedCards.filter((card) => card.id !== item.id);
    }

    await AsyncStorage.setItem("likedEventCards", JSON.stringify(parsedCards));
  };
  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-lg font-psemibold">Popular Events</Text>
        <TouchableOpacity>
          <Text className="text-lg text-[#C24B25]">See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <PopularEventCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Events Card */}
      <View className="mt-5">
        {popularData.map((item) => (
          <View
            key={item.id}
            className="p-2 mt-3 w-full rounded-lg bg-[#F5F5F5] flex flex-row"
          >
            <View className="flex flex-row justify-start gap-4 text-left items-center">
              <View className="w-[30%]">
                <Image
                  source={require("../assets/images/profile.png")}
                  className="h-[100px] w-[100px] rounded-lg"
                />
              </View>
              <View className="w-[54%]">
                <Text className="text-[16px] text-left mb-2 font-psemibold">
                  {item.name}
                </Text>
                <Text className="text-[12px] text-left font-medium text-[#C24B25]">
                  {item.date}
                </Text>
                <View className="flex flex-row justify-start items-center mt-3">
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={20}
                    color="#c24b25"
                  />
                  <Text className="text-sm">{item.venue}</Text>
                </View>
              </View>
            </View>
            <View className="absolute right-3 bottom-3">
              <TouchableOpacity onPress={() => handleLike(item)}>
                <Ionicons
                  name={likedItems[item.id] ? "heart" : "heart-outline"}
                  color={likedItems[item.id] ? "red" : "#000"}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PopularEvents;

const styles = StyleSheet.create({});
