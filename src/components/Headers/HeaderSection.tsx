import { useAppTheme } from "@hooks";
import { theme } from "@theme";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Badge } from "../Badge/Badge";

const { colors } = useAppTheme()

type HeaderProps = {
  title: string;
  hasBadge?: boolean
}

export function HeaderSection({title, hasBadge=false}: HeaderProps) {
  return (
    <View style={styles.header}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={styles.wrapper} />
          <Text style={styles.title}>{title}</Text>
        </View>
        {hasBadge && (
          <Badge description="See All" />
        )}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.s20
  },
  title: {
    fontSize: theme.fontSize.headingSmall,
    fontFamily: theme.font.semiBold
  },
  wrapper: {
    height: 20,
    width: 4,
    borderRadius: 10,
    backgroundColor: theme.colors.purple
  },
})