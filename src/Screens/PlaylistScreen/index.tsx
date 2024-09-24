import {FC, useEffect, useLayoutEffect, useState} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {Button, Image, Text, View} from 'react-native';
import {images} from '../../Assets/Images';
import {styles} from './styles';
import IconButton from '../../Components/Ui/IconButton';
import LogoButton from '../../Components/Ui/LogoButton';
import PlaylistCard from '../../Components/Ui/ListCard';
import {getAlbumSongs} from '../../Apis';
import Share from 'react-native-share';
import {ScrollView} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {theme} from '../../Constants/Colors/theme';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {DHeight, DWidth} from '../../Constants/Dimensions';

const PlaylistScreen: FC<IHome> = ({navigation, route}) => {
  const [songsData, setSongsData] = useState({});
  const [formattedTime, setFormattedTime] = useState('');

  const {albumId} = route.params;

  useLayoutEffect(() => {
    async function fetchsongs() {
      try {
        const response = await getAlbumSongs(albumId);

        const filteredSongs = response?.data?.tracks.items.filter(
          (item: {preview_url: string | null}) => !!item.preview_url,
        );

        setSongsData(prevData => ({
          ...prevData,
          ...response?.data,
          tracks: {
            ...response?.data.tracks,
            items: filteredSongs,
          },
        }));
      } catch (error) {
        console.log('Error fetching songs using album ID');
      }
    }

    fetchsongs();
  }, [albumId]);

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

  // console.log(songsData?.tracks?.items);

  function musicPlayerNavHandler(id: string) {
    navigation.navigate('MusicPlayer', {
      songsId: id,
      song: songsData?.tracks?.items,
    });
  }

  useEffect(() => {
    const calculateTotalDuration = () => {
      if (songsData?.tracks?.items) {
        const totalDurationMs = songsData.tracks.items.reduce(
          (acc: number, song: any) => acc + song.duration_ms,
          0,
        );

        const hours = Math.floor(totalDurationMs / 3600000);
        const minutes = Math.floor((totalDurationMs % 3600000) / 60000);
        const seconds = Math.floor((totalDurationMs % 60000) / 1000);

        setFormattedTime(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    calculateTotalDuration();
  }, [songsData]);

  // console.log('===========>' , songsData?.tracks.items.map(item => item.preview_url) );

  function ShareHandler() {
    const options = {
      title: 'Share Song',
      message: 'check this track out',
      url: songsData?.tracks.items[0].preview_url,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }

  const tabBarHeight = useBottomTabBarHeight();

  const Y = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    Y.value = event.contentOffset.y;
    console.log(event.contentOffset.y);
  });
  const animatedImageStyle = useAnimatedStyle(() => {
    const scale = interpolate(Y.value, [0, 100], [1, 0.5], 'clamp');
    const opacity = interpolate(Y.value, [0, 200], [1, 0], 'clamp');

    return {
      transform: [{scale}],
      opacity,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(Y.value, [0, 200], [0, 1], 'clamp');

    return {
      translateY,
    };
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingBottom: tabBarHeight,
        backgroundColor: theme.secondary100,
      }}>
      <Animated.View style={[styles.rootContainer, animatedTextStyle]}>
        <Animated.View style={styles.imageContainer}>
          <Animated.Image
            style={[styles.imageCardStyle, animatedImageStyle]}
            source={images.CardPics}
          />
        </Animated.View>
        {/* <Image style={styles.imageCardStyle}  source={images.CardPics} /> */}
        {/* </View> */}
        {songsData && (
          <Text style={styles.textStyle}>
            Tune in to Top Tracks from{' '}
            {songsData?.tracks?.items[0]?.artists[0]?.name}
          </Text>
        )}
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.logoStyle} source={images.mainGreenLogo} />
          <Text style={styles.spotifyText}>Spotify</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>191,165 Likes . {formattedTime}</Text>
        </View>
        <View style={styles.logosContainer}>
          <View style={styles.playLogoContainer}>
            <LogoButton source={images.heartLogo} />
            <LogoButton
              overrideStyle={styles.overridePropLogo}
              source={images.propertiesLogo}
            />
          </View>
          <LogoButton source={images.playGreenLogo} />
        </View>

        <PlaylistCard
          playlistRenderData={songsData?.tracks?.items}
          onPress={(id: string) => musicPlayerNavHandler(id)}
          sharingPress={ShareHandler}
        />
      </Animated.View>
    </Animated.ScrollView>
  );
};

export default PlaylistScreen;
