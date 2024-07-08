import { theme } from "@theme";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,TouchableOpacityProps } from "react-native";
import { Icon, IconName } from "../Icon/Icon";

type IconDataProps = TouchableOpacityProps & {
  size?: 'medium' | 'large'
  iconName:IconName,
  description: string
}

export function Category({ iconName, description, size = 'medium', ...rest }: IconDataProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} {...rest}>
      <View style={[styles.circle,
      {
        height: size === 'medium' ? 54 : 78,
        width: size === 'medium' ? 54 : 78,
      }
      ]}>
       {iconName && (
         <Icon name={iconName} size={24}/>
       )}
      </View>
      <Text style={styles.textCategory}>{description}</Text>
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