import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {fonts, dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Text from 'react-native-text';

export const Footer = ({title, onPressBack}) => {
  return (
    <View style={hstyles.header}>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: dimensions.width
  }}
/>
<View style={hstyles.contain}>
                    <View>
                  <Text style={hstyles.text2}>Academy</Text>
                  </View>
                  <View>
                  <Text style={hstyles.text3}>Bookmark</Text>
                  </View>
                  <View>
                  <Text style={hstyles.text3}>Home</Text>
                  </View>
                  <View>
                  <Text style={hstyles.text3}>Portfolio</Text>
                  </View>
                  <View>
                  <Text style={hstyles.text3}>Account</Text>
                  </View>
                  </View>
    </View>
  );
};
const hstyles = StyleSheet.create({
  header: {
    height: responsive.vertical(80),
    width: dimensions.width,
    // paddingLeft: responsive.horizontal(30),
    paddingRight: responsive.horizontal(40),
  },
  title: {
    fontSize: 34,
    color: colors.white,
    ...fonts.mark_heavy,
    marginTop: responsive.vertical(30),
  },
  contain:{
    flexDirection: 'row',
    marginTop: responsive.vertical(40),
    justifyContent: 'space-around',
    width: dimensions.width
    // marginLeft: responsive.vertical(30)

  }
});
