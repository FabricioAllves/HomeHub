import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Category, Header, HeaderSection, Screen } from "@components";
import { theme } from "@theme";

const categoriesData = [
  { id: 1, name: "AC Repair", icon: "acRepairIcon" },
  { id: 2, name: "Beauty", icon: "acRepairIcon" },
  { id: 3, name: "AC Repair", icon: "acRepairIcon" },
  { id: 4, name: "Beauty", icon: "acRepairIcon" },
  { id: 5, name: "AC Repair", icon: "acRepairIcon" },
  { id: 6, name: "Beauty", icon: "acRepairIcon" },
  { id: 7, name: "AC Repair", icon: "acRepairIcon" },
  { id: 8, name: "Beauty", icon: "acRepairIcon" },
  { id: 9, name: "AC Repair", icon: "acRepairIcon" },
];

export function CategoriesScreen() {
  return (
    <Screen>
      <Header/> 
      <View style={styles.container}>
        <HeaderSection title="All Categories" />
        <FlatList
          data={categoriesData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3} 
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <Category key={item.id} size="large" iconName="AcRepair" description="Eletronics" />
          )}
        />
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
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 30
  },
});
