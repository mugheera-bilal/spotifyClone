import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import Title from '../Title';
import IconButton from '../IconButton';
import {images} from '../../../Assets/Images';
import {styles} from './styles';
import {SONGSDATA} from '../../../Util/SongData';

const PlaylistCard: FC<IHome> = ({onPress, playlistRenderData}) => {
  return (
    <View style={{ flex : 1}}>

    <FlatList
      data={playlistRenderData}
      // keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <Pressable onPress={() => onPress(item.id)} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.rootContainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={styles.imageStyle}
                    source={images.perfectCover}
                    />
                </View>
                <View style={{margin: '2%'}}>
                  <Text style={styles.titleTextStyle}>{item.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.lyricsText}>LYRICS</Text>
                    <Text style={styles.textStyle}>{item.artists[0].name}</Text>
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
      </View>
  );
};

export default PlaylistCard;
