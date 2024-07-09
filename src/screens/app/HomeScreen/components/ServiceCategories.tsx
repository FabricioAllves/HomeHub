import React from "react";
import { View, StyleSheet } from "react-native";
import { Category } from "@components";
import { theme } from "@theme";

import { useNavigation } from '@react-navigation/native'
import { AppStackNavigatorRoutesProps } from "@routes/app.stack.routes";

export function ServiceCategories() {

  const { navigate } = useNavigation<AppStackNavigatorRoutesProps>();
  return (
    <View style={styles.container}>
      <Category iconName="AcRepair" description="AC Repair" color="violet" onPress={() => navigate('ServicesScreen', { title: "AC Repair" })} />
      <Category iconName="Categorie1" description="Beauty" color="pink" onPress={() => navigate('ServicesScreen', { title: "AC Repair" })} />
      <Category iconName="Categorie3" description="Appliance" color="orange" onPress={() => navigate('ServicesScreen', { title: "AC Repair" })} />
      <Category iconName="ArrowRight" description="See All" color="#ECECEC" onPress={() => navigate('CategoriesScreen')} />
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