import {FC, useEffect, useState} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {Image, Text, View} from 'react-native';
import {images} from '../../Assets/Images';
import {styles} from './styles';
import IconButton from '../../Components/Ui/IconButton';
import LogoButton from '../../Components/Ui/LogoButton';
import PlaylistCard from '../../Components/Ui/ListCard';
import {getAlbumSongs} from '../../Apis';

const PlaylistScreen: FC<IHome> = ({navigation, route}) => {
  const [songsData, setSongsData] = useState<any[]>([]);

  const {albumId} = route.params;
  // console.log('albumID ==>> ', albumId);
  useEffect(() => {
    const fetchSongsForAllAlbums = async () => {
      try {
        let albumSongs = await getAlbumSongs(albumId);
        setSongsData(albumSongs?.data);

        // console.log(
        //   ' albumSongs?.data?.tracks.items duration =============>',
        //   albumSongs?.data?.tracks.items.map((item) => item.duration_ms),
        // );

      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    if (albumId?.length) {
      fetchSongsForAllAlbums();
    }
  }, [albumId]);

  // console.log('======> ' , JSON.stringify(songsData[0].artists[0].name, null , 2))
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

  function musicPlayerNavHandler(id) {
    navigation.navigate('MusicPlayer', {
      songsId: id,
    });
  }

  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const fetchSongsForAllAlbums = async () => {
      try {
    let albumSongs = await getAlbumSongs(albumId);
    setSongsData(albumSongs?.data);
    const totalDurationMs = albumSongs?.data?.tracks.items.reduce(
      (acc, song) => acc + song.duration_ms,
      0,
    );

    // console.log('Total Duration in ms:', totalDurationMs);

    const hours = Math.floor(totalDurationMs / 3600000);
    const minutes = Math.floor((totalDurationMs % 3600000) / 60000);
    const seconds = Math.floor((totalDurationMs % 60000) / 1000);

    // console.log(`Formatted Time: ${hours}h ${minutes}m ${seconds}s`);

    const formatted = `${hours}h ${minutes}m ${seconds}s`;
    setFormattedTime(`${hours}h ${minutes}m ${seconds}s`);
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
};

if (albumId?.length) {
  fetchSongsForAllAlbums();
}
  }, [songsData]);

  // console.log(songsData.artists[0].name);
  

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageCardStyle} source={images.CardPics} />
      </View>
      {songsData && (
        <Text style={styles.textStyle}>
          Tune in to Top Tracks from {songsData?.tracks?.items[0]?.artists[0]?.name}

          
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
        onPress={id => musicPlayerNavHandler(id)}
      />
    </View>
  );
};

export default PlaylistScreen;
