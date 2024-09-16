import {FC, useEffect, useState} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import Title from '../../Components/Ui/Title';
import Card from '../../Components/Ui/Card';
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

const HomeScreen: FC<IHome> = ({navigation}) => {
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

          // console.log('albums == > ', JSON.stringify(albumsData.data.albums, null, 2));
          setAlbums(albumsData?.data.albums);
        } else {
          console.log('error fetching albums data' , albumsData);
          
        }
        // console.log('artist image',artistData?.data.artists[0].images[1].url);
        
        const tracksData = await getTracks();
        if (tracksData?.data?.tracks) {
          // console.log('First Track Album Name:', tracksData.data.tracks[0]?.album?.name);
          // console.log('First Track Artist Name:', tracksData.data.tracks[0]?.album?.artists[0]?.name);
          setTracks(tracksData.data.tracks); 
        } else {
          console.error('Error fetching tracks data:', tracksData);
        }
        
        const recommendationData = await getRecommendation()
        // console.log('getRecommendation',recommendationData?.data.tracks);
        setRecommendation(recommendationData?.data.tracks)
        
      }
    };
    init();
  }, []);
  
  function playlistNavigationHandler() {
    navigation.navigate('Playlist');
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
                onPress={playlistNavigationHandler}
                />
            </View>

            <View>
              <Title text="Trending Now" />
              <Card
                tracksRenderData={tracks}
                onPress={playlistNavigationHandler}
                />
            </View>
            <View>
              <Title text="Top picks for you" />
              <Card
                tracksRenderData={recommendation}
                onPress={playlistNavigationHandler}
                />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
};

export default HomeScreen;


// const [playlist, setPlaylist] = useState<any[]>([]);


// const featuredPlaylist = await getFeaturedPlaylist()
// console.log('featuredplaylist',JSON.stringify(featuredPlaylist, null, 2));
// setPlaylist(featuredPlaylist)