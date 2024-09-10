import {Children, FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {Image, Pressable, Text, View} from 'react-native';
import { styles } from './styles';

const CustomButton: FC<IHome> = ({children, onPress, imageSource, ImgStyle, extraStyle}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, extraStyle]}>
      <View style={styles.innerStyle}>
      {imageSource ? <Image style={ImgStyle} source={imageSource} /> : null}
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
