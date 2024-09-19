import {FC, useEffect, useRef, useState} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {images} from '../../Assets/Images';
import LogoButton from '../../Components/Ui/LogoButton';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getSongs} from '../../Apis';
import Sound from 'react-native-sound';

// const pause = images.pauseLogo;
// const play = images.playLogo;

const MusicPlayerScreen: FC<IHome> = ({navigation, route}) => {
  const [Pause, setPause] = useState<boolean>(true);
  const [songName, setSongName] = useState<any>(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const {songsId} = route.params;

  useEffect(() => {
    async function getSongDetails() {
      try {
        const songDetails = await getSongs(songsId);
        if (songDetails) {
          setSongName(songDetails);

          const previewUrl = songDetails.data.preview_url;
          if (previewUrl) {
            const track = new Sound(previewUrl, null, error => {
              if (error) {
                Alert.alert('Error', 'Failed to load the sound');
                return;
              }
              setSound(track);
              setDuration(track.getDuration());
            });
          } else {
            Alert.alert('Error', 'No preview URL found for this track');
          }
        }
      } catch (error) {
        console.error('Error fetching song details:', error);
      }
    }

    getSongDetails();

    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [songsId]);

  const playPauseHandler = () => {
    if (sound) {
      if (Pause) {
        sound.play(success => {
          if (!success) {
            Alert.alert('Error', 'Failed to play the sound');
          }
        });
        setPause(false);
      } else {
        sound.pause();
        setPause(true);
      }
    }
  };

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none'},
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      });
    };
  }, [navigation]);

  function backButtonHandler() {
    navigation.goBack();
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerCenter}>{songName?.data.name} Song</Text>
          </View>
        );
      },
      headerTitleAlign: 'center',
      headerBackVisible: false,
      headerRight: () => {
        return (
          <LogoButton
            overrideStyle={{marginHorizontal: 20}}
            source={images.propertiesLogo}
          />
        );
      },
      headerLeft: () => {
        return (
          <LogoButton
            overrideStyle={{marginHorizontal: 20}}
            onPress={backButtonHandler}
            source={images.arrowDownLogo}
          />
        );
      },
    });
  }, []);

  useEffect(() => {
    if (sound) {
      intervalRef.current = setInterval(() => {
        sound.getCurrentTime(seconds => {
          setPosition(seconds); 
        });
      }, 1000); 

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [sound]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const onSliderValueChange = (value: number) => {
    if (sound) {
      const newPosition = value * duration;
      sound.setCurrentTime(newPosition);
      setPosition(newPosition);
    }
  };

  return (
    <>
      <LinearGradient
        colors={['#494848', '#272626', '#161515']}
        style={{flex: 1}}>
        <Image style={styles.imageStyle} source={images.perfectCover} />
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.titleText}>{songName?.data.name}</Text>
            <Text style={styles.topTextStyle1}>
              {songName?.data.artists[0].name}
            </Text>
          </View>
          <LogoButton source={images.heartLogo} />
        </View>
        <View style={styles.playLineStyle}>
          <Slider
            style={{width: 350, height: 40, alignSelf: 'center'}}
            minimumValue={0}
            maximumValue={1}
            value={position / duration || 0}
            onSlidingComplete={onSliderValueChange}
            minimumTrackTintColor="#FFFFFF"
            thumbTintColor="white"
            maximumTrackTintColor="#000000ff"
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white'}}>{formatTime(position)}</Text>
            <Text style={{color: 'white'}}>{formatTime(duration)}</Text>
          </View>
        </View>
        <View style={styles.logoContainer}>
          <LogoButton source={images.shufleLogo} />
          <LogoButton source={images.previousPlayLogo} />
          <Pressable
            onPress={playPauseHandler}
            style={({pressed}) => pressed && styles.pressed}>
            <MaterialCommunityIcons
              color={'white'}
              size={85}
              name={Pause ? 'play-circle' : 'pause-circle'}
            />
          </Pressable>
          {/* {<PlayPauseButton />} */}
          <LogoButton source={images.nextPlayLogo} />
          <LogoButton source={images.loopLogo} />
        </View>
        <View style={styles.lastLogoContainer}>
          <LogoButton source={images.castLogo} />
          <LogoButton source={images.shareLogo} />
        </View>
      </LinearGradient>
    </>
  );
};

export default MusicPlayerScreen;
