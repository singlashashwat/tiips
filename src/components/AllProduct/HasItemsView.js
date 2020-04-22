import React from 'react';
import {View, ScrollView, Animated, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import {responsive} from '../../styles/mixins';
import Text from 'react-native-text';
import {colors, dimensions, fonts} from '../../styles/variables';
import FastImage from 'react-native-fast-image';

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

export const HasItemsView = ({data}) => {
  return (
    <View
      style={{
        flex: 1,
        // height: responsive.vertical(100),
        marginTop: responsive.vertical(40),
        // backgroundColor: colors.pink1
      }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollContent}
          style={styles.scroll}
          >
          {data &&
            data.map((obj, i) => {
              return (
                <View style={{
                  marginLeft: responsive.horizontal(20),
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
        </ScrollView>
      </View>
  );
};
