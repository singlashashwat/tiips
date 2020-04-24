import React from 'react';
import {View, ScrollView, Animated, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import {responsive} from '../../styles/mixins';
import Text from 'react-native-text';
import {colors, dimensions, fonts} from '../../styles/variables';
import Icon from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
  // contentCont: {flex: 1},
  scroll: {flex: 1},
  scrollContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 25,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.0,
  },
  text1: {
    color: colors.black,
    fontSize: 10,
    alignSelf: 'center',
    ...fonts.mark_medium,
    textAlign: 'center',
    marginTop: responsive.vertical(10)
  },
  text2:{
    color: colors.black,
    fontSize: 8,
    // marginLeft: responsive.vertical(13),
    // alignSelf: 'center',
    ...fonts.mark_medium,
    // textAlign: 'center',
  },
  text3:{
    position: 'absolute',
    color: colors.black,
    fontSize: 8,
    // alignSelf: 'center',
    ...fonts.mark_medium,
    // textAlign: 'center',
    // marginTop: responsive.vertical(15),
    // marginLeft: responsive.vertical(20)
  },
  contain:{
    // flex: 1, 
    flexDirection: 'row',
    marginLeft: responsive.vertical(30)
  }
});

const scrollX = new Animated.Value(0);

export const HasItemsView = ({data,onclickRight,onclickLeft,
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
  title}) => {
    var FirstINdex;
  if(title == 'Consumer Product'){
    FirstINdex = count
  } else if(title == 'ETFs'){
    FirstINdex = etfcount
  } else if(title == 'Energy'){
    FirstINdex = energycount
  } else if(title == 'Financials'){
    FirstINdex = fincount
  } else if(title == 'Health Care'){
    FirstINdex = carecount
  } else if(title == 'IT'){
    FirstINdex = itcount
  } else if(title == 'Industrials'){
    FirstINdex = indcount
  } else if(title == 'Materials'){
    FirstINdex = matcount
  } else if(title == 'Real Estate'){
    FirstINdex = realcount
  } else if(title == 'Telco'){
    FirstINdex = telcocount
  } else if(title == 'Utilities'){
    FirstINdex = utlcount
  }
  return (
    <View
      style={{
        flex: 1,
        // height: responsive.vertical(100),
        // width: responsive.vertical(220),
        zIndex:1,
        marginTop: responsive.vertical(40),
        // marginLeft: responsive.vertical(25),
        flexDirection:'row',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 1.0,
        // backgroundColor: colors.pink1
      }}>
        {/* <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollContent}
          style={styles.scroll}
          > */}
           <TouchableOpacity style={{
              marginTop: responsive.vertical(40),
              marginLeft: responsive.vertical(5),
                    }}
              onPress={e=> onclickLeft(title)}>
            <Icon name="caretleft" size={20} color={colors.grey_dark} />
            </TouchableOpacity>
          {data &&
            data.slice([FirstINdex], [FirstINdex + 3]).map((obj, i) => {
              return (
                <View style={{
                  marginLeft: responsive.horizontal(10),
                  width: responsive.vertical(120),
                  // height: responsive.vertical(150)
                }}>
                  <FastImage
                    key={i}
                    style={{
                      width: responsive.horizontal(90),
                      height: responsive.horizontal(90),
                      shadowColor: 'rgba(0, 0, 0, 0.25)',
                       shadowRadius: 4,
                        shadowOffset: {
                          width: 2,
                          height: 3,
                        },
                       shadowOpacity: 1.0,
                    }}
                    source={{uri:  'https://demo-api.bigmind.io/v1/products/logos/' + obj.product_id}}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <Text style={styles.text1}>{obj.name}</Text>
                  <View style={styles.contain}>
                    <View>
                  <Text style={styles.text2}>${obj.close_price}</Text>
                  </View>
                  <View>
                  <Text style={styles.text3}>({obj.change_percentage}%)</Text>
                  </View>
                  </View>
                </View>
              );
            })}
            <TouchableOpacity style={{
        marginTop: responsive.vertical(40),
      }}
      onPress={e=>onclickRight(title)}>
            <Icon name="caretright" size={20} color={colors.grey_dark} />
            </TouchableOpacity>
        {/* </ScrollView> */}
      </View>
  );
};
