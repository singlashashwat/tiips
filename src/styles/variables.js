import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const dimensions = {
  width,
  height,
};

export const colors = {
  black: 'black',
  white: '#ffffff',
  white1: '#F9F9F9',
  white2: '#f1f1f1',
  white3: '#EBEBEB',
  yellow: '#FEDE33',
  yellow1: '#FED600',
  yellow2: '#E7C200',
  yellow_light: '#FFE783',
  yellow_heavy: '#FCA800',
  yellow3: '#FFE482',
  blue1: '#0072D8',
  blue2: '#0E2EBF',
  blue3: '#8DEFF7',
  blue4: '#37D8E0',
  blue5: '#1D2C66',
  blue6: '#2479CF',
  blue7: '#BBFDFF',
  blue8: '#30C5D7',
  blue9: '#C3F7FB',
  pink1: '#FF99BB',
  pink2: '#FF799F',
  pink3: '#EF1B71',
  pink4: '#FF4277',
  grey_light: '#DADADA',
  grey_dark: '#B8B8B8',
  grey1: '#E5E5E5',
  grey2: '#CACACA',
  grey3: '#919191',
  grey5: '#C4C4C4',
  grey6: '#6D6D6D',
  prizeRed: '#EF1B71',
  prizeBlue: '#0072D8',
  prizeGreen: '#8DEFF7',
  prizeGrey: '#FEDE33',
  grey4: '#979797',
};

export const bgColors = [
  '#FEDE33',
  '#0072D8',
  '#0072D8',
  '#FED600',
  '#FF99BB',
  '#E7C200',
  '#FFE783',
  '#FCA800',
  '#FFE482',
  '#0E2EBF',
  '#8DEFF7',
  '#37D8E0',
  '#1D2C66',
  '#2479CF',
  '#BBFDFF',
  '#30C5D7',
  '#C3F7FB',
  '#FF799F',
  '#EF1B71',
  '#FF4277',
  '#DADADA',
  '#B8B8B8',
  '#EF1B71',
  '#8DEFF7',
  '#FEDE33',
  '#979797',
];

export const fonts = {
  mark_medium: {fontFamily: 'MarkOffcForMC-Medium'},
  mark_bold: {fontFamily: 'MarkOffcForMC-Bold'},
  mark_book: {fontFamily: 'MarkOffcForMC-Book'},
  mark: {fontFamily: 'MarkOffcForMC'},
  mark_heavy: {fontFamily: 'MarkOffcForMC-Heavy'},
  mark_light: {fontFamily: 'MarkOffcForMC-Light'},
  univers_bold: {fontFamily: 'UniversLTStd-Bold'},
  univers_light: {fontFamily: 'UniversLTStd-Light'},
  univers_lighter: {fontFamily: 'UniversLTStd-LightCn'},
};
