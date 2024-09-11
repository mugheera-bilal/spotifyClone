import {FC, useEffect} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {Image, ScrollView, Text, View} from 'react-native';
import {images} from '../../Assets/Images';
import {styles} from './styles';
import IconButton from '../../Components/Ui/IconButton';
import ListCard from '../../Components/Ui/ListCard';

const PlaylistScreen: FC<IHome> = ({navigation}) => {
  function backButtonHandler() {
    navigation.goBack();
  }

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            onPress={backButtonHandler}
            name="chevron-back-outline"
            color="white"
            size={34}
            customStyle={{marginHorizontal: 0}}
          />
        );
      },
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageCardStyle} source={images.CardPics} />
      </View>
      <Text style={styles.textStyle}>
        Tune in to Top Tracks from Imagine Dragons, Alan walker and many more
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.logoStyle} source={images.mainGreenLogo} />
        <Text style={styles.spotifyText}>Spotify</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>191,165 Likes . 3h 45min</Text>
      </View>
      <View style={styles.logosContainer}>
        <View style={{flexDirection: 'row'}}>
          <IconButton
            name="heart-outline"
            color="white"
            size={35}
            customStyle={{marginHorizontal: 10}}
          />
          <IconButton
            name="ellipsis-vertical-outline"
            color="white"
            size={30}
          />
        </View>
        <Image style={styles.playLogoStyle} source={images.playLogo} />
      </View>

      <ListCard />
    </View>
  );
};

export default PlaylistScreen;
