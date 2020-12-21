import { Dimensions, PixelRatio } from 'react-native';
import { RESPONSIVE_TYPE } from '../type';

const appScreen = Dimensions.get('window');

export const getResponsiveValue = (type: 'WIDTH' | 'HEIGHT' | 'FONT', ratio: number) => {
  let screenValue: number = 0;

  if (type === RESPONSIVE_TYPE['WIDTH']) {
    screenValue = appScreen.width;
  } else if (type === RESPONSIVE_TYPE['HEIGHT']) {
    screenValue = appScreen.height;
  } else if (type === RESPONSIVE_TYPE['FONT']) {
    screenValue = appScreen.width;
  }
  return PixelRatio.roundToNearestPixel(screenValue * ratio / 100);
};
