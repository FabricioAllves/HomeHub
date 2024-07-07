import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, SearchInput } from "@components";
import { theme } from "@theme";

export function Search() {
  return(
    <View style={styles.container}>
        <View>
          <Text style={styles.text}>Hello Ashfak 👋</Text>
          <Text style={styles.title}>What you are looking for today</Text>
        </View>
        <SearchInput
          placeholder="Search what you need..."
          rightComponent={
            <Icon name="Search" color="white_200" size={16}/>
          }
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    width: '100%',
    padding: theme.spacing.s16,
    gap: theme.spacing.s16,
    borderRadius: theme.borderRadius.s8
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