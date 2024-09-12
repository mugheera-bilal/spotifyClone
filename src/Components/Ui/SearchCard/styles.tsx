import {StyleSheet} from 'react-native';
import { Fonts } from '../../../Constants/Fonts/Fonts';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  boxContainer: {
    padding: 10,
    margin: 10,
    backgroundColor : '#fc5470',
    borderRadius : 5,
    width : 185,
    height : 120,
    // minWidth : '100%'

  },
  textStyle : {
    color : 'white',
    fontSize : 18,
    fontFamily : Fonts.gotham,

    fontWeight : '800'
  }
});
