import {StyleSheet} from 'react-native';
import { Fonts } from '../../../Constants/Fonts/Fonts';

export const styles = StyleSheet.create({
  rootContainer: {
    // flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical : 5,
    // paddingBottom : 10
  },
  imageStyle: {
    width: 65,
    height: 65,
    margin : 5
  },
  textStyle: {
    color: 'gray',
    fontFamily : Fonts.gotham,

    fontSize: 16,
  },
  titleTextStyle : {
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
