import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {images} from '../../../Assets/Images';
import {styles} from './styles';
import {SONGSDATA} from '../../../Util/SongData';

const Card: FC<IHome> = ({onPress}) => {
  return (
    <FlatList
      data={SONGSDATA}
      keyExtractor={item => item.id}
      horizontal={true}
      renderItem={({item}) => {
        return (
          <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
              <Image style={styles.imageStyle} source={images.CardPics} />
              <Text style={styles.titleTextStyle}>{item.title}</Text>
              <Text style={styles.textStyle}>Song . {item.artist}</Text>
            </View>
          </Pressable>
        );
      }}
    />
  );
};

export default Card;
