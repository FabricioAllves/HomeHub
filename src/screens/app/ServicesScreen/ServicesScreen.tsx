import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Header, HeaderSection, Screen } from "@components";
import { theme } from "@theme";
import { Card } from "./components/Card";

// const servicesData = [
//   { id: 1, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
//   { id: 2, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
//   { id: 3, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
//   { id: 4, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
//   { id: 5, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
// ];

export function ServicesScreen() {
  return (
    <Screen>
      <Header />
      <View style={{ backgroundColor: theme.colors.gray_200, flex: 1, gap: 24, padding: 24 }}>
        <View style={styles.container}>
          <HeaderSection title="Appliance Repair" />
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={({ item }) => (
              <Card />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 40
            }}
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
  separator: {
    height: 1,
    backgroundColor: theme.colors.gray_200,
    marginVertical: 10
  }
});
