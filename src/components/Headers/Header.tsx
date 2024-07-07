import { useAppTheme } from "@hooks";
import { theme } from "@theme";
import React from "react";
import { View, StyleSheet } from "react-native";
import { SearchInput } from "../SearchInput/SearchInput";
import { Icon } from "../Icon/Icon";

const { colors } = useAppTheme()

export function Header() {
  return (
    <View style={styles.container}>
      <SearchInput
        canBack
        placeholder="Search what you need..."
        rightComponent={
          <Icon name="Search" color="white_200" size={14} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    height: 72,
    width: '100%',
    paddingHorizontal: theme.spacing.s24,
    justifyContent: 'center'
  }
})