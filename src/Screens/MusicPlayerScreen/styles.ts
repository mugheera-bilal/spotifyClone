import {StyleSheet} from 'react-native';
import Title from '../../Components/Ui/Title';
import { Fonts } from '../../Constants/Fonts/Fonts';

export const styles = StyleSheet.create({
  topStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  topTextStyle1: {
    color: 'white',
    fontSize: 16,
  },
  topTextStyle2: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    fontFamily : Fonts.gotham,

  },
  imageStyle: {
    alignSelf: 'center',
    width: 350,
    height: 350,
    marginTop: 100,
  },
  playLineStyle: {
    alignSelf : 'center',
    // marginHorizontal: 30,
    margin: 10,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 30,
    // marginHorizontal : 30
  },
  titleText: {
    color: 'white',
    fontFamily : Fonts.gotham,

    fontSize: 26,
    fontWeight: '900',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  lastLogoContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  headerContainer: {
    justifyContent: 'center',
  },
  headerCenter:{
    textAlign: 'center',
    fontSize: 18,
    fontFamily : Fonts.gotham,

    color: 'white'
  }
});
