import {StyleSheet} from 'react-native';
import {theme} from '../../Constants/Colors/theme';
import {Fonts} from '../../Constants/Fonts/Fonts';
import {DHeight, DWidth} from '../../Constants/Dimensions';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.secondary100,
  },
  rootContainer: {
    flex: 1,
    paddingHorizontal: 4,
    backgroundColor: theme.secondary100,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageCardStyle: {
    margin: 20,
    width: DWidth * 65,
    height: DHeight * 35,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.poppins,
    marginLeft: 10,
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
    fontFamily: Fonts.gotham,

    textAlignVertical: 'center',
    margin: 10,
  },
  playLogoStyle: {
    width: 100,
    height: 100,
  },
  logosContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.secondary50,
  },
  headerTitleContainer: {
    paddingLeft: DWidth * 7,
  },
  headerCenter: {
    fontSize: 24,
    fontFamily: Fonts.gotham,
    color: 'white',
    paddingVertical: DHeight * 1.5,
  },

  overridePropLogo: {marginHorizontal: 20},
});
