import React from "react";
import { View, StyleSheet } from "react-native";
import { Category } from "@components";
import { theme } from "@theme";

export function ServiceCategories() {
  return(
    <View style={styles.container}>
    <Category name="AcRepair" />
    <Category name="AcRepair" />
    <Category name="AcRepair" />
    <Category name="AcRepair" />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    width: '100%',
    padding: theme.spacing.s16,
    gap: theme.spacing.s16,
    borderRadius: theme.borderRadius.s8,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    color: theme.colors.black_300,
    fontFamily: theme.font.semiBold,
    fontSize: theme.fontSize.paragraphMedium,
    marginBottom: theme.spacing.s4
  },
  title: {
    color: theme.colors.black_100,
    fontFamily: theme.font.bold,
    fontSize: theme.fontSize.headingMedium
  },
})