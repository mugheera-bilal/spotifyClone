import {StyleSheet} from 'react-native';
import {theme} from '../../../Constants/Colors/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 170,
    height: 170,
    marginBottom: 10,
  },
  titleTextStyle: {
    color: theme.secondary10,
    fontSize: 18,
    fontWeight : '800'
  },
  textStyle :{
    color: theme.secondary10,
    fontSize: 14,
    fontWeight : '800'
  }
});
