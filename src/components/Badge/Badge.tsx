import React from "react";
import { theme } from "@theme";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "../Icon/Icon";

type BadgeProps = {
  description: string;
}

export function Badge({ description }: BadgeProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <Icon name="ChevronRight" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white_200,
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderColor: theme.colors.gray_200,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center'
  },
  description: {
    color: theme.colors.gray_50,
    fontSize: theme.fontSize.paragraph,
    fontFamily: theme.font.semiBold,
  }
})