import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Search from "../../components/Search";
import PopularEvents from "../../components/PopularEvents";
import FeaturedEvents from "../../components/FeaturedEvents";

const Explore = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFB] h-full px-4">
      <ScrollView>
        <StatusBar style="dark" />
        {/* Header */}
        <Header />
        {/* Search */}
        <Search />
        {/* Popular Events */}
        <PopularEvents />
        {/* Featured */}
        <FeaturedEvents />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
