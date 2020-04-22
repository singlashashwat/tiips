import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {fonts, dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Text from 'react-native-text';

export const Header = ({title, onPressBack}) => {
  return (
    <View style={hstyles.header}>
      <Text style={hstyles.title}>{title}</Text>
    </View>
  );
};
const hstyles = StyleSheet.create({
  header: {
    height: responsive.vertical(100),
    backgroundColor: colors.prizeGreen ,
    // shadowColor: 'rgba(0, 0, 0, 0.2)',
    // shadowRadius: 4,
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 1.0,
    width: dimensions.width,
    paddingLeft: responsive.horizontal(30),
    paddingRight: responsive.horizontal(40),
  },
  title: {
    fontSize: 34,
    color: colors.white,
    ...fonts.mark_heavy,
    marginTop: responsive.vertical(40),
  },
  desc: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.blue6,
    ...fonts.mark_medium,
    marginTop: responsive.horizontal(5),
  },
});
