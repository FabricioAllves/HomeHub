import React from "react";
import { theme } from "@theme";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { HeaderSection } from "@components";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.stack.routes";


export function FeaturedServices() {
  const { navigate } = useNavigation<AppStackNavigatorRoutesProps>()

  return (
    <View style={styles.container}>
      <HeaderSection title="Cleaning Services" hasBadge />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ width: 139 }}
            activeOpacity={0.7}
            onPress={() => navigate('ServicesScreen', {title: 'lorem'})}
            >
            <Image
              source={{ uri: 'https://frontsaude.com/wp-content/uploads/2023/11/homem-limpeza-seu-lar-1600x1067.jpg' }}
              width={139}
              height={154}
              borderRadius={theme.borderRadius.s10}
            />
            <Text style={styles.descriptionService}>Home Cleaning</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ gap: theme.spacing.s16 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    width: '100%',
    padding: theme.spacing.s16,
    borderRadius: theme.borderRadius.s8
  },
  descriptionService: {
    fontSize: theme.fontSize.paragraphMedium,
    fontFamily: theme.font.semiBold,
    paddingVertical: theme.spacing.s12,
    textAlign: 'center'
  }
})