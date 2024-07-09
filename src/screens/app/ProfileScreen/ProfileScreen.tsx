import React from "react";
import { theme } from "@theme";
import { Badge, Icon, Screen } from "@components";
import { View, StyleSheet, Text, Image, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ProfileScreen() {
  const { goBack } = useNavigation();

  return (
    <Screen>
      <View style={styles.headerGoback}>
        <Pressable onPress={goBack}>
          <Icon name="ArrowLeft" size={25} />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.subHeader}>
            <View style={{ gap: 10, flexDirection: 'row', alignItems: "center" }}>
              <View style={styles.separatorColor} />
              <Text style={styles.textProfile}>Profile</Text>
            </View>
            <Badge description="Edit Profile" />
          </View>

          <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
            <View style={styles.header}>
              <Image
                source={{ uri: 'https://github.com/FabricioAllves.png' }}
                width={68}
                height={68}
                borderRadius={100}
              />
              <View style={{ gap: 4 }}>
                <Text style={styles.nameUser}>Fabricio Henrique</Text>
                <Text style={{ color: theme.colors.black_300 }}>lorem@gmail.com</Text>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
            <><Text style={styles.labelInput}>Phone Number</Text>
              <View style={styles.input}>
                <Text>+55 9 62 81135220</Text>
              </View></>

            <><Text style={styles.labelInput}>Email</Text>
              <View style={styles.input}>
                <Text>fabricioohh@gmail.com</Text>
              </View></>

            <><Text style={styles.labelInput}>Gender</Text>
              <View style={styles.input}>
                <Text>Male</Text>
              </View></>

            <><Text style={styles.labelInput}>Date of Birth</Text>
              <View style={styles.input}>
                <Text>No Set</Text>
              </View></>
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray_200,
    width: "100%",
    flex: 1,
    gap: 20,
    padding: theme.spacing.s24,
    borderRadius: theme.borderRadius.s8,
  },
  headerGoback: {
    height: 60,
    paddingHorizontal: 24,
    justifyContent: 'center'
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  separatorColor: {
    height: 20,
    width: 4,
    borderRadius: 10,
    backgroundColor: theme.colors.purple
  },
  textProfile: {
    fontFamily: theme.font.bold,
    fontSize: 24
  },
  header: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.s10
  },
  nameUser: {
    color: theme.colors.black_100,
    fontFamily: theme.font.bold,
    fontSize: 15
  },
  labelInput: {
    paddingVertical: 15,
    fontFamily: theme.font.bold
  },
  input: {
    width: '100%',
    height: 55,
    borderRadius: 8,
    backgroundColor: theme.colors.gray_200,
    justifyContent: 'center',
    paddingHorizontal: 15
  }
})