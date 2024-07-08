import React from "react";
import { Header, Screen } from "@components";

import { ScrollView } from "react-native";
import { theme } from "@theme";
import { Search } from "./components/Search";
import { Offers } from "./components/Offers";
import { ServiceCategories } from "./components/ServiceCategories";
import { FeaturedServices } from "./components/FeaturedServices";

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