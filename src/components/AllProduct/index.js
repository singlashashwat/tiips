/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TextInput} from 'react-native';
import {dimensions, colors, fonts} from '../../styles/variables';
// import Gap from '../shared/Gap';
// import {AbsoluteMenuIcon} from '../shared/AbsoluteMenuIcon';
import {responsive} from '../../styles/mixins';
import {Header} from './Header';
import {Footer} from './Footer';
import Text from 'react-native-text';
import {HasItemsView} from './HasItemsView';

const mainStyles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
  },
  container1: {
    height: responsive.vertical(210),
    width: dimensions.width,
    // backgroundColor: colors.pink1,
  },
  scrollContent: {
    position: 'relative',
    minHeight: dimensions.height,
    width: dimensions.width,
    // alignItems: 'center',
  },
  scrollview: {
    flex: 1,
  },
  text1: {
    position: 'absolute',
    color: colors.grey_dark,
    fontSize: 14,
    marginTop: responsive.vertical(10),
    marginLeft: responsive.horizontal(30),
    ...fonts.mark_heavy,
    // textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1.0,
  },
});
const AllProduct = ({
  title,
  productData
}) => {
return (
    <View style={mainStyles.container}> 
     <Header title={title} />
    <ScrollView style={mainStyles.scrollview}
          contentContainerStyle={mainStyles.scrollContent}>
    {productData && productData.length > 0 && productData.map((obj, i) => {
              return (
                <View style={mainStyles.container1}>
                  <Text style={mainStyles.text1}>{obj.description}</Text>
                  <HasItemsView data={obj.Details ? obj.Details : []} />
                </View>
              );
            })}
      
      </ScrollView> 
      <Footer />
    </View>
  );
};

export default AllProduct;
