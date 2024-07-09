import { Icon, Screen } from "@components";
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useServicesProvided } from "./userServicesProvided";
import { theme } from "@theme";
import { useNavigation } from "@react-navigation/native";

export function ServicesProvided() {
  const { clients } = useServicesProvided();
  const { goBack } = useNavigation();

  return (
    <Screen>
      <View style={styles.headerGoback}>
        <Pressable onPress={goBack}>
          <Icon name="ArrowLeft" size={25} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={{
          fontFamily: theme.font.semiBold, fontSize: theme.fontSize.headingSmall,
          marginBottom: theme.spacing.s20
        }}>Services Provided for</Text>
        <ScrollView contentContainerStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {clients.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.header}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  width={68}
                  height={68}
                  borderRadius={100}
                />
                <View style={{ gap: 4 }}>
                  <Text style={styles.nameUser}>{item.name.first}</Text>
                  <Text style={{ color: theme.colors.black_300 }}>{item.email}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.colors.gray_200
  },
  card: {
    width: '100%',
    height: 90,
    paddingHorizontal: 10,
    borderRadius: theme.borderRadius.s8,
    backgroundColor: theme.colors.white_200
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
  headerGoback: {
    height: 60,
    paddingHorizontal: 24,
    justifyContent: 'center'

  },
})