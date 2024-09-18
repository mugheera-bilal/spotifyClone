import {FC, useEffect} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {Image, Text, View} from 'react-native';
import {images} from '../../Assets/Images';
import {styles} from './styles';
import IconButton from '../../Components/Ui/IconButton';
import LogoButton from '../../Components/Ui/LogoButton';
import PlaylistCard from '../../Components/Ui/ListCard';

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

  function musicPlayerNavHandler () {
    navigation.navigate('MusicPlayer')
  }

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
        <View style={styles.playLogoContainer}>
          <LogoButton  source={images.heartLogo}/>
          <LogoButton overrideStyle={styles.overridePropLogo} source={images.propertiesLogo}/>
        </View>
        <LogoButton source={images.playGreenLogo}/>
      </View>

      <PlaylistCard onPress={musicPlayerNavHandler}/>

    </View>
  );
};

export default PlaylistScreen;
