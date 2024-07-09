import { Icon } from "@components";
import { theme } from "@theme";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";

type DataProps = {
  data: {
    id: number;
    stars: string;
    service: string;
    description: string;
    value: string;
  }
}

export function Card({ data }: DataProps) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          width={105}
          height={116}
          borderRadius={theme.borderRadius.s8}
          source={{ uri: 'https://www.climagel.com.br/wp-content/uploads/2017/02/c700x420-1.jpg' }}
        />

        <View style={styles.wrapperCard}>
          <View style={styles.header}>
            <Text style={styles.starTitle}>{data.stars}</Text>
            <Icon name="MoreHorizontal" />
          </View>
          <Text style={styles.titleService}>{data.service}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.containerValue}>
            <Text style={styles.textValue}>{data.value}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: theme.spacing.s16,
  },
  wrapperCard: {
    gap: theme.spacing.s8,
    justifyContent: 'space-evenly',
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starTitle: {
    color: theme.colors.black_50,
    fontSize: theme.fontSize.paragraph,
    fontFamily: theme.font.bold
  },
  titleService: {
    color: theme.colors.black_50,
    fontSize: theme.fontSize.paragraphMedium,
    fontFamily: theme.font.semiBold
  },
  description: {
    color: theme.colors.gray,
    fontSize: theme.fontSize.paragraph,
    fontFamily: theme.font.regular
  },
  containerValue: {
    backgroundColor: '#B5E4CA',
    alignSelf: 'flex-start',
    borderRadius: theme.borderRadius.s5,
    padding: theme.spacing.s4
  },
  textValue: {
    color: theme.colors.black_50,
    fontSize: theme.fontSize.paragraph,
    fontFamily: theme.font.bold
  }
})