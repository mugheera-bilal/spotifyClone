import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {Image, Pressable, Text, View} from 'react-native';
import {images} from '../../../Assets/Images';
import {styles} from './styles';

const Card: FC<IHome> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={images.CardPics} />
        <Text style={styles.textStyle}>Ed Sheeran</Text>
      </View>
    </Pressable>
  );
};

export default Card;
