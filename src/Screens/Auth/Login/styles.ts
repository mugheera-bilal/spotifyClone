import {StyleSheet} from 'react-native';
import {theme} from '../../../Constants/Colors/theme';

export const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
    marginTop: 140,
    alignSelf: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  textContainer: {
    // justifyContent : 'center',
    // alignItems : 'center',
    alignSelf: 'center',
    padding: 10,
    width: 300,
    height: 150,
  },
  textStyle: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '800',
  },
  loginButton: {
    backgroundColor: theme.primary100,
    borderColor: theme.primary100,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  loginText: {
    color: theme.secondary100,
  },

  lastText: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },

lastTextButton: {
    color: theme.blue100,
  },
});
