import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Category, Header, HeaderSection, Screen } from "@components";
import { theme } from "@theme";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.stack.routes";
import { useCategories } from "./useCategories";

export function CategoriesScreen() {
  const { navigate } = useNavigation<AppStackNavigatorRoutesProps>();
  const { categoriesData } = useCategories();

  return (
    <Screen>
      <Header />
      <View style={{ padding: 24 }}>
        <View style={styles.container}>
          <HeaderSection title="All Categories" />
          <FlatList
            data={categoriesData}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({ item }) => (
              <Category
                key={item.id}
                size="large"
                iconName={item.icon}
                description={item.name}
                color={item.color}
                onPress={() => navigate('ServicesScreen', { title: item.name })}
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray_200,
    padding: theme.spacing.s24,
    borderRadius: theme.borderRadius.s8,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 30
  },
});
