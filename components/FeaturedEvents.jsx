import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { featuredData } from "../constants/data";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FeaturedEventCard = ({ item }) => {
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
    <View style={styles.cardContainer}>
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        className="w-[280px] mr-3 rounded-xl h-[180px] p-3 flex flex-col flex-1"
      >
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
          style={styles.gradient}
        />
        <TouchableOpacity className="px-3 py-2 bg-white opacity-60 rounded-xl w-[60px]">
          <Text className="text-sm font-medium text-center">{item.type}</Text>
        </TouchableOpacity>

        <View className="flex-1 mt-10 flex-row justify-between items-center">
          <View>
            <Text className="text-white font-psemibold text-lg">
              {item.name}
            </Text>
            <Text className="text-gray-200 text-sm">{item.date}</Text>
          </View>
          <TouchableOpacity
            onPress={() => handleLike(item)}
            className="p-2 bg-white opacity-50 rounded-lg"
          >
            <Ionicons
              name={likedItems[item.id] ? "heart" : "heart-outline"}
              color={likedItems[item.id] ? "red" : "#000"}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const FeaturedEvents = () => {
  return (
    <View className="mt-4">
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-lg font-psemibold">Featured</Text>
        <TouchableOpacity>
          <Text className="text-lg text-[#C24B25]">See All</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Cards */}

      <FlatList
        data={featuredData}
        renderItem={({ item }) => <FeaturedEventCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View className="flex flex-row justify-between items-center mt-6">
        <Text className="text-lg font-psemibold">Trending Events</Text>
        <TouchableOpacity>
          <Text className="text-lg text-[#C24B25]">See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedEvents;

const styles = StyleSheet.create({
  cardContainer: {
    width: 280,
    height: 180,
    marginRight: 12,
    borderRadius: 15,
    overflow: "hidden",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});
