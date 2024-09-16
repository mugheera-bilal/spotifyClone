import {StyleSheet} from 'react-native';
import {theme} from '../../../Constants/Colors/theme';
import { Fonts } from '../../../Constants/Fonts/Fonts';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
  },
  pressed : {
opacity : 0.8

  },
  imageStyle: {
    width: 160,
    height: 160,
    marginBottom: 10,
  },
  titleTextStyle: {
    color: theme.secondary10,
    fontSize: 18,
    fontFamily : Fonts.gotham,
    fontWeight : '800'
  },
  textStyle :{
    color: theme.secondary10,
    fontSize: 14,
    fontWeight : '800',
    fontFamily : Fonts.gotham,

  }
});
