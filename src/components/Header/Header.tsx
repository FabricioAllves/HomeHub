import { useAppTheme } from "@hooks";
import { theme } from "@theme";
import React from "react";
import { View, StyleSheet } from "react-native";

const {colors} = useAppTheme()

export function Header() {
  return(
    <View style={styles.container}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    height: 72,
    width: '100%'
  }
})