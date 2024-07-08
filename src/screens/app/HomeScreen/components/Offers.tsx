import { Badge, Icon } from "@components";
import { theme } from "@theme";
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
const { width: screenWidth } = Dimensions.get('window');


export function Offers() {
  const data = [
    {titleOffer: 'Get 25%', categorie: 'Offer AC Service', color: '#6A9B7E50'},
    {titleOffer: 'Get 15%', categorie: 'Offer Beauty', color: '#83C1DE50'},
    {titleOffer: 'Get 24%', categorie: 'Offer AC Service', color: '#CABDFF50'},
    {titleOffer: 'Get 24%', categorie: 'Offer Applice', color: '#FFD88D50'},
    {titleOffer: 'Get 24%', categorie: 'Offer AC Service', color: '#6A9B7E50'},
  ]

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        snapToInterval={screenWidth * 0.68}
        decelerationRate="fast"
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.promotion, { backgroundColor: item.color }]} activeOpacity={0.7}>
            <View style={styles.headerPromotion}>
              <Text style={styles.text}>{item.categorie}</Text>
              <Icon name="Help" color="black_300" size={18} />
            </View>
            <Text style={styles.title}>{item.titleOffer}</Text>
            <Badge description="Grab Offer" />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    width: '100%',
    padding: theme.spacing.s16,
    gap: theme.spacing.s16,
    borderRadius: theme.borderRadius.s8
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

  promotion: {
    backgroundColor: theme.colors.orange,
    width: screenWidth * 0.68,
    padding: theme.spacing.s16,
    justifyContent: 'space-between',
    borderRadius: theme.borderRadius.s8,
    gap: theme.spacing.s12,
    marginRight: theme.spacing.s10
  },
  headerPromotion: {
    flexDirection: 'row',
    gap: 8
  }
})