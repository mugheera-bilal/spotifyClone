import {FC, useEffect, useState} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {Image, Pressable, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {images} from '../../Assets/Images';
import LogoButton from '../../Components/Ui/LogoButton';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getSongs} from '../../Apis';

// const pause = images.pauseLogo;
// const play = images.playLogo;

const MusicPlayerScreen: FC<IHome> = ({navigation, route}) => {
  const [songName, setSongName] = useState<any>();

  const {songsId} = route.params;
  // console.log('==============>', songsId);

  useEffect(() => {
    const init = async () => {
      const songsData = await getSongs(songsId);
      // console.log(
      //   '>>>>>>>>>>>>',
      //   JSON.stringify(songsData?.data.name, null, 2),
      // );
      // console.log(
      //   '>>>>>>>>>>>>',
      //   JSON.stringify(songsData?.data.artists[0].name, null, 2),
      // );
      setSongName(songsData);
      return songsData;
    };
    init();

  }, []);

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

  const [Pause, setPause] = useState<boolean>(true);

  function PauseHandler() {
    if (Pause === false) {
      setPause(true);
    } else if (Pause === true) {
      setPause(false);
    }
  }

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

  return (
    <>
      <LinearGradient
        colors={['#494848', '#272626', '#161515']}
        style={{flex: 1}}>
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
            style={{width: 380, height: 40}}
            minimumValue={0}
            maximumValue={1}
            thumbTintColor="#FFFFFF"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={styles.logoContainer}>
          <LogoButton source={images.shufleLogo} />
          <LogoButton source={images.previousPlayLogo} />
          <Pressable
            onPress={PauseHandler}
            style={({pressed}) => pressed && styles.pressed}>
            <MaterialCommunityIcons
              color={'white'}
              size={85}
              name={Pause ? 'pause-circle' : 'play-circle'}
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
