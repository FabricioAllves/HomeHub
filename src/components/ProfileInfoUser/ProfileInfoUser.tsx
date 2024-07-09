import { theme } from "@theme";
import React from "react";
import { StyleSheet, View, Image, Text } from 'react-native'

export function ProfileInfoUser() {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://github.com/FabricioAllves.png' }}
        width={68}
        height={68}
        borderRadius={100}
      />
      <View style={{ gap: 4 }}>
        <Text style={styles.nameUser}>Fabricio Henrique</Text>
        <Text style={{ color: 'white' }}>lorem@gmail.com</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    gap: theme.spacing.s10
  },
  nameUser: {
    color: theme.colors.white_200,
    fontFamily: theme.font.bold,
    fontSize: 15
  },
})