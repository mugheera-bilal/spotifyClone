import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {images} from '../../../Assets/Images';
import {styles} from './styles';

const ArtistCard: FC<IHome> = ({onPress, albumsRenderData, albumId}) => {
  const trimName = (name: string) => {
    return name.length >= 15 ? name.slice(0, 15) + '...' : name;
  };

  return (
    <FlatList
      data={albumsRenderData}
      keyExtractor={item => item.id}
      horizontal={true}
      renderItem={({item}) => {
        // console.log('Album iddddd');
        // console.log('item.duration_ms ===>>>');
        
        // const albumId =  item.id
        // const artistNames = track.artists.map((artist: any) => artist.name).join(', ');
        return (
          <Pressable
            onPress={() => onPress(item.id)}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
              <Image style={styles.imageStyle} source={images.CardPics} />
              {/* <Text style={styles.titleTextStyle}>
                {trimName(track.album.name)} 
              </Text> */}
              <Text style={styles.titleTextStyle}>{trimName(item.name)}</Text>
            </View>
          </Pressable>
        );
      }}
    />
  );
};

export default ArtistCard;
