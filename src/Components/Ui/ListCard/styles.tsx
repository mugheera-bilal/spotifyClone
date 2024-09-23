import {StyleSheet} from 'react-native';
import { Fonts } from '../../../Constants/Fonts/Fonts';
import { DHeight, DWidth } from '../../../Constants/Dimensions';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical : 5,
  },
  imageStyle: {
    width: DWidth * 17,
    height: DHeight * 8,
    margin : 5
  },
  textStyle: {
    color: 'gray',
    fontFamily : Fonts.gotham,
    fontSize: 16,
  },
  titleTextStyle : {
    width : 250,
    marginVertical : 5,
    textAlignVertical : 'center',
    color: 'white',
    fontFamily : Fonts.gotham,

    fontSize: 20,
    fontWeight : '900'
  },
  lyricsText : {
    backgroundColor : '#c5c4c4',
    color : 'black',
    paddingHorizontal : 3,
    fontSize : 10,
    textAlignVertical : 'center',
    fontWeight :'bold',
    marginRight : 4,
    borderRadius : 2,
    fontFamily : Fonts.gotham,
    height : 15,
    marginTop : 4
  }, 
  pressed : {
    opacity : 0.5
  }
});
