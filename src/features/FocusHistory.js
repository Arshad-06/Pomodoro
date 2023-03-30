import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors.js';
import { fontSizes, spacing } from '../utils/sizes.js';

const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title1}>We Haven't Focused On Anything Yet</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Things We've Focused On!</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.m,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.m,
    color: colors.white,
    paddingTop: spacing.m,
    marginLeft: spacing.s,
  },
  title1: {
    color: colors.white,
    fontSize: fontSizes.m,
    marginLeft: spacing.l,
    fontWeight: 'bold',
  },
  title2: {
    color: colors.white,
    fontSize: fontSizes.m,
    marginLeft: spacing.s,
    fontWeight: 'bold',
  },
});
