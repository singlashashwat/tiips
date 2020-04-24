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
import Loading from './Loading';

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
  loading: {
    height: dimensions.height,
    width: dimensions.width,
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
  productData,
  loading,
  onclickRight,
  onclickLeft,
  count,
  etfcount,
  energycount,
  fincount,
  carecount,
  itcount,
  indcount,
  matcount,
  realcount,
  telcocount,
  utlcount,
}) => {
return (
    <View style={mainStyles.container}> 
     <Header title={title} />
     {loading && (
        <Loading size={'large'} style={mainStyles.loading} />
      )}

      {!loading && ( 
    <ScrollView style={mainStyles.scrollview}
          contentContainerStyle={mainStyles.scrollContent}>
    {productData && productData.map((obj, i) => {
              return (
                <View style={mainStyles.container1}>
                  <Text style={mainStyles.text1}>{obj.description.toUpperCase()}</Text>
                  <HasItemsView data={obj.Details ? obj.Details : []} onclickRight={onclickRight} onclickLeft={onclickLeft} 
                  count={count} 
                  etfcount={etfcount}
                  energycount={energycount}
                  fincount={fincount}
                  carecount={carecount}
                  itcount={itcount}
                  indcount={indcount}
                  matcount={matcount}
                  realcount={realcount}
                  telcocount={telcocount}
                  utlcount={utlcount}
                  title = {obj.description}/>
                </View>
              );
            })}
      
      </ScrollView> 
      )}
      <Footer />
    </View>
  );
};

export default AllProduct;
