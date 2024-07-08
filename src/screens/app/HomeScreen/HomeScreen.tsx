import React from "react";
import { Header, Screen } from "@components";

import {
  Search,
  Offers,
  ServiceCategories,
  FeaturedServices
} from "./components";
import { SafeAreaView, ScrollView, View } from "react-native";
import { theme } from "@theme";

export function HomeScreen() {
  return (
    <Screen>
      <Header isHome />
      <ScrollView style={{
        padding: 24,
        backgroundColor: theme.colors.gray_200
      }}
        contentContainerStyle={{ gap: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Search />
        <Offers />
        <ServiceCategories />
        <FeaturedServices />
      </ScrollView>
    </Screen>
  )
}