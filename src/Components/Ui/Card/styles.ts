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
  textStyle: {
    color: theme.secondary10,
    fontSize: 16,
  },
});
