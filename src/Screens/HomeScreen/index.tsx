import {FC, useEffect, useState} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import Title from '../../Components/Ui/Title';
import LinearGradient from 'react-native-linear-gradient';
import LogoButton from '../../Components/Ui/LogoButton';
import {images} from '../../Assets/Images';
import {
  fetchSpotifyToken,
  getAlbums,
  getRecommendation,
  getTracks,
} from '../../Apis';
import ArtistCard from '../../Components/Ui/ArtistCard';
import CardList from '../../Components/CardList';

const HomeScreen: FC<IHome> = ({navigation, route}) => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);
  const [recommendation, setRecommendation] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      const token = await fetchSpotifyToken();
      console.log('..........', token);

      if (token) {
        const albumsData: any = await getAlbums();
        if (albumsData?.data?.albums) {
          // const albumId = albumsData.data.albums.items.map(item => item.id);
          // console.log('id  ==>>', albumId);

          setAlbums(albumsData?.data.albums.items);
        } else {
          console.log('error fetching albums data', albumsData);
        }

        const tracksData = await getTracks();
        if (tracksData?.data?.tracks) {
          // console.log('============>', tracksData?.data?.tracks.map(item => item.preview_url));
          
          setTracks(tracksData.data.tracks);
        } else {
          console.error('Error fetching tracks data:', tracksData);
        }

        const recommendationData = await getRecommendation();
        // const previewUrl = recommendationData?.data?.tracks.filter(item => item.preview_url)
        // console.log('recommedation ============>', recommendationData?.data?.tracks.filter(item => item.preview_url))
        // if (previewUrl) {}
        setRecommendation(recommendationData?.data.tracks);
      }
    };
    init();
  }, []);

  // console.log('albums ==>>',albums);

  function playlistNavigationHandler(id : string) {
    // console.log('id ==============>', id);

    navigation.navigate('Playlist', {
      albumId: id,
    });
  }

  function musicPlayerNavigationHandler(id : string , preview_url : string) {
    // console.log('id ==============>', id);

    navigation.navigate('MusicPlayer', {
      songsId: id,
      previewUrl : preview_url
    });
  }

  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={['#858181', '#363535', '#161515']}
          style={{flex: 1}}>
          <View style={styles.rootContainer}>
            <View>
              <View style={styles.titleIcon}>
                <Title text="Made for you" />
                <View style={styles.iconContainer}>
                  <LogoButton
                    overrideStyle={{marginHorizontal: 20}}
                    source={images.bellLogo}
                  />
                  <LogoButton
                    overrideStyle={{marginHorizontal: 20}}
                    source={images.historyLogo}
                  />
                  <LogoButton
                    overrideStyle={{marginHorizontal: 20}}
                    source={images.settingLogo}
                  />
                </View>
              </View>
              <ArtistCard
                albumsRenderData={albums}
                onPress={( id : string) => playlistNavigationHandler(id)}
              />
            </View>

            <View>
              <Title text="Trending Now" />
              <CardList
                tracksRenderData={tracks}
                onPress={(id : string) => musicPlayerNavigationHandler(id)}
              /> 
            </View>
            <View>
              <Title text="Top picks for you" />
              <CardList
                tracksRenderData={recommendation}
                onPress={(id : string) => musicPlayerNavigationHandler(id)}
              />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
