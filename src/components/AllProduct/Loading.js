import React, {Component} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cont: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Loading extends Component {
  render() {
    const {color = '#0000ff', size = 'small', style} = this.props;
    return (
      <View style={[styles.cont, style]}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }
}
