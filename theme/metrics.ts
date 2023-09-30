import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const metrics = {
  height,
  width,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
