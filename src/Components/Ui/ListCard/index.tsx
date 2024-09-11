import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import Title from '../Title';
import IconButton from '../IconButton';
import {images} from '../../../Assets/Images';
import {styles} from './styles';
import {SONGSDATA} from '../../../Util/SongData';

const ListCard: FC<IHome> = ({onPress}) => {
  return (
    <FlatList
      data={SONGSDATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <Pressable onPress={onPress}>
            <View style={styles.rootContainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={styles.imageStyle}
                    source={images.perfectCover}
                  />
                </View>
                <View style={{margin: '2%'}}>
                  <Text style={styles.titleTextStyle}>{item.title}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.lyricsText}>LYRICS</Text>
                    <Text style={styles.textStyle}>{item.artist}</Text>
                  </View>
                </View>
              </View>
              <View>
                <IconButton
                  name="ellipsis-vertical-outline"
                  color="white"
                  size={28}
                />
              </View>
            </View>
          </Pressable>
        );
      }}
    />
  );
};

export default ListCard;
