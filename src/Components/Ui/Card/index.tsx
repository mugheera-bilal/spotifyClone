import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {images} from '../../../Assets/Images';
import {styles} from './styles';

const Card: FC<IHome> = ({onPress, tracksRenderData}) => {

  const trimName = (name: string) => {
    return name.length >= 15 ? name.slice(0, 15) + '...' : name;
  };
  
  
  
  return (
    <FlatList
    data={tracksRenderData}
    keyExtractor={item => item.id}
    horizontal={true}
    renderItem={({item}) => {


        return (
          <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
              <Image style={styles.imageStyle} source={images.CardPics} />
              <Text style={styles.titleTextStyle}>
              {trimName(item.name)} 
              </Text>
              <Text style={styles.textStyle}>
                Song . {trimName(item.artists[0].name)}
              </Text>
            </View>
          </Pressable>
        );
      }}
    />
  );
};

export default Card;
