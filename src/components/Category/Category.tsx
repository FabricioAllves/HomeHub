import { theme } from "@theme";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "../Icon/Icon";

type IconDataProps = {
  size?: 'medium' | 'large'
  name: "Search" | "ArrowLeft" | "AcRepair"
}

export function Category({ name, size = 'medium' }: IconDataProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <View style={[styles.circle,
      {
        height: size === 'medium' ? 54 : 78,
        width: size === 'medium' ? 54 : 78,
      }
      ]}>
        <Icon name={name} />
      </View>
      <Text style={styles.textCategory}>Eletronics</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.s12
  },
  circle: {
    backgroundColor: theme.colors.green_100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  textCategory: {
    fontFamily: theme.font.regular,
    fontSize: theme.fontSize.paragraphSmall,
    color: theme.colors.black_200
  }
})