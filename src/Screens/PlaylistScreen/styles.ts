import {StyleSheet} from 'react-native';
import {theme} from '../../Constants/Colors/theme';
import { Fonts } from '../../Constants/Fonts/Fonts';
import { DHeight, DWidth } from '../../Constants/Dimensions';

export const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    backgroundColor : theme.secondary100
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
    fontFamily : Fonts.poppins,
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
    fontFamily : Fonts.gotham,

    textAlignVertical: 'center',
    margin: 10,
  },
  playLogoStyle: {
    width: 100,
    height: 100,
  },
  logosContainer: {
    marginHorizontal : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftContainer: {
    // flexDirection : 'row',
    // alignItems : 'center',
    // justifyContent: 'center',
    backgroundColor : theme.secondary50,
  },
  headerTitleContainer: {
    // flexDirection : 'row',
    // alignItems : 'center',
    // justifyContent: 'center',

    // paddingHorizontal : '96.9%',
    // paddingLeft : DWidth * 7,
    backgroundColor : theme.secondary50,
  },
  headerCenter:{
    textAlign: 'center',
    fontSize: 24,
    fontFamily : Fonts.gotham,
    color: 'white',
    minWidth : '95%',
    // marginRight : DWidth * 15.7,
    // paddingRight : 250,
    // minHeight : '100%',
    // paddingHorizontal : DWidth * 15,
    // paddingRight : '100%',
    paddingVertical : DHeight * 1.5,
    // borderRadius : 10
  },
  animatedHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100, 
    zIndex: 0,  
  },
  overridePropLogo: {marginHorizontal: 20},
});
