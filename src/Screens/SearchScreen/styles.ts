import {StyleSheet} from 'react-native';
import {theme} from '../../Constants/Colors/theme';
import {Fonts} from '../../Constants/Fonts/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondary100,
  },
  titleStyle: {
    fontSize: 45,
    fontFamily: Fonts.gotham,
  },
});
