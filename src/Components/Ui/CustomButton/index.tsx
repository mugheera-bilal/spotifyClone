import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const CustomButton: FC<IHome> = ({
  children,
  onPress,
  imageSource,
  ImgStyle,
  extraStyle,
  extraTextStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        extraStyle,
        pressed && styles.pressed,
      ]}>
      <View style={styles.innerStyle}>
        {imageSource ? <Image style={ImgStyle} source={imageSource} /> : null}
        <Text style={[styles.textStyle, extraTextStyle]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
