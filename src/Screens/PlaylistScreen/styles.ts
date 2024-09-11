import {StyleSheet} from 'react-native';
import {theme} from '../../Constants/Colors/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // height : 950,
    paddingHorizontal: 4,
    backgroundColor: theme.secondary100,
    // justifyContent : 'center'
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageCardStyle: {
    margin: 20,
    width: 250,
    height: 270,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    marginLeft : 10
  },
  logoStyle: {
    width: 30,
    height: 30,
    margin: 10,
  },
  spotifyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    textAlignVertical: 'center',
    margin: 10,
  },
  playLogoStyle: {
    width: 100,
    height: 100,
  },
  logosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
