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
import Share from 'react-native-share';

const MusicPlayerScreen: FC<IHome> = ({navigation, route}) => {
  const [Pause, setPause] = useState<boolean>(true);
  const [songName, setSongName] = useState<any>(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);  
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const {songsId, song} = route.params;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const ShareHandler = () => {
    const options = {
      title: 'Share Song',
      message: 'Check this track out',
      url: songName?.data.preview_url,
    };
    Share.open(options)
      .then(res => console.log(res))
      .catch(err => err && console.log(err));
  };

  const getSongDetails = async (trackId: string) => {
    try {
      const songDetails = await getSongs(trackId);
      if (songDetails) {
        setSongName(songDetails);
        const previewUrl = songDetails.data.preview_url;
        if (previewUrl) {
          const track = new Sound(previewUrl, null, error => {
            if (error) {
              Alert.alert('Error', 'Failed to load the sound');
              return;
            }
            if (sound) {
              sound.release(); 
            }
            setSound(track);
            setDuration(track.getDuration());
            setPosition(0);
          });
        } else {
          Alert.alert('Error', 'No preview URL found for this track');
        }
      }
    } catch (error) {
      console.error('Error fetching song details:', error);
    }
  };

  useEffect(() => {
    getSongDetails(songsId);
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [songsId]);

  // Play/Pause Handler
  const playPauseHandler = () => {
    if (sound) {
      if (Pause) {
        sound.play(success => {
          if (!success) {
            Alert.alert('Error', 'Failed to play the sound');
          }
        });
        sound.setNumberOfLoops(loop ? -1 : 0); // Infinite loop if loop is enabled
        setPause(false);
      } else {
        sound.pause();
        setPause(true);
      }
    }
  };

  // Handle navigation bar visibility
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

  // Header customization
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Text style={styles.headerCenter}>{songName?.data.name} Song</Text>
        </View>
      ),
      headerTitleAlign: 'center',
      headerBackVisible: false,
      headerRight: () => (
        <LogoButton
          onPress={ShareHandler}
          overrideStyle={{marginHorizontal: 20}}
          source={images.propertiesLogo}
        />
      ),
      headerLeft: () => (
        <LogoButton
          overrideStyle={{marginHorizontal: 20}}
          onPress={backButtonHandler}
          source={images.arrowDownLogo}
        />
      ),
    });
  }, [songName]);

  useEffect(() => {
    if (sound) {
      intervalRef.current = setInterval(() => {
        sound.getCurrentTime(seconds => setPosition(seconds));
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

  const toggleLoop = () => {
    setLoop(prevLoop => !prevLoop); 
  };

  const handleNextTrack = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < song.length) {
      setCurrentIndex(nextIndex);
      getSongDetails(song[nextIndex].id); 
      setPause(false);
    } else {
      console.log('Reached end of playlist');
    }
  };

  const handlePreviousTrack = () => {
    const nextIndex = currentIndex - 1;
    if (nextIndex < song.length) {
      setCurrentIndex(nextIndex);
      getSongDetails(song[nextIndex].id); 
      setPause(false);
    } else {
      console.log('This is the start of playlist');
    }
  };

  const handleShuffleTrack = () => {
    const randomIndex = Math.floor(Math.random() * song.length); 
    setCurrentIndex(randomIndex);
    getSongDetails(song[randomIndex].id); 
    setPause(false); 
  };

  return (
    <LinearGradient colors={['#494848', '#272626', '#161515']} style={{flex: 1}}>
      <Image style={styles.imageStyle} source={images.perfectCover} />
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>{songName?.data.name}</Text>
          <Text style={styles.topTextStyle1}>{songName?.data.artists[0].name}</Text>
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
        <LogoButton onPress={handleShuffleTrack} source={images.shufleLogo} />
        <LogoButton onPress={handlePreviousTrack} source={images.previousPlayLogo} />
        <Pressable onPress={playPauseHandler} style={({pressed}) => pressed && styles.pressed}>
          <MaterialCommunityIcons
            color={'white'}
            size={85}
            name={Pause ? 'play-circle' : 'pause-circle'}
          />
        </Pressable>
        <LogoButton onPress={handleNextTrack} source={images.nextPlayLogo} />
        <LogoButton onPress={toggleLoop} source={images.loopLogo} />
      </View>
      <View style={styles.lastLogoContainer}>
        <LogoButton source={images.castLogo} />
        <LogoButton onPress={ShareHandler} source={images.shareLogo} />
      </View>
    </LinearGradient>
  );
};

export default MusicPlayerScreen;
