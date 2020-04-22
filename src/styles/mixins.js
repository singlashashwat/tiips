import {dimensions} from './variables';

const vertical = val => Math.floor((val / 812) * dimensions.height);
const horizontal = val => Math.floor((val / 375) * dimensions.width);

export const responsive = {
  vertical,
  horizontal,
};

export const resFontsizeFun = ({text, width, maxFont, minFont}) => {
  const textNumber = text ? text.length : 1;
  const roundfontsz = Math.floor((width / textNumber) * 2.1);
  const fontsz = Math.max(Math.min(maxFont, roundfontsz), minFont);

  return fontsz;
};

export const shadowFun = ({
  radius = 2,
  color = 'grey',
  opacity = 1,
  offset = {
    width: responsive.horizontal(0.5),
    height: responsive.horizontal(0.5),
  },
}) => ({
  shadowRadius: radius,
  shadowColor: color,
  shadowOpacity: opacity,
  shadowOffset: offset,
});
