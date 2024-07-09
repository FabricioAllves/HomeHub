import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Header, HeaderSection, Screen } from "@components";
import { theme } from "@theme";
import { Card } from "./components/Card";
import { useRoute } from "@react-navigation/native";
import { useServices } from "./useServices";

type RouteParamsProps = {
  title: string;
}

export function ServicesScreen() {
  const { servicesData } = useServices();
  const route = useRoute();
  const { title } = route.params as RouteParamsProps;

  return (
    <Screen>
      <Header />
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <HeaderSection title={title} />
          <FlatList
            data={servicesData}
            renderItem={({ item }) => (
              <Card data={item} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    width: "100%",
    padding: theme.spacing.s16,
    borderRadius: theme.borderRadius.s8,
  },
  wrapper: {
    backgroundColor: theme.colors.gray_200,
    flex: 1,
    gap: 24,
    padding: 24
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.gray_200,
    marginVertical: 10
  }
});
