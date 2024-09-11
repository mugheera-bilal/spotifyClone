import {StyleSheet} from 'react-native';

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
    fontWeight : '800'
  }
});
