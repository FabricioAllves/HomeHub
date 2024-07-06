import React from "react";
import { theme } from "@theme";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Badge } from "@components";


export function FeaturedServices() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={styles.wrapper} />
          <Text style={styles.title}>Cleaning Services</Text>
        </View>
        <Badge description="See All" />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={({ item }) => (
          <View style={{ width: 139 }}>
            <Image
              source={{ uri: 'https://frontsaude.com/wp-content/uploads/2023/11/homem-limpeza-seu-lar-1600x1067.jpg' }}
              width={139}
              height={154}
              borderRadius={theme.borderRadius.s10}
            />
            <Text style={styles.descriptionService}>Home Cleaning</Text>
          </View>
        )}
        contentContainerStyle={{gap:theme.spacing.s16}}
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
  descriptionService: {
    fontSize: theme.fontSize.paragraphMedium,
    fontFamily: theme.font.semiBold,
    paddingVertical: theme.spacing.s12,
    textAlign: 'center'
  }
})