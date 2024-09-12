import {FC} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Title from '../../Components/Ui/Title';
import IconButton from '../../Components/Ui/IconButton';
import Card from '../../Components/Ui/Card';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../Constants/Colors/theme';
import LogoButton from '../../Components/Ui/LogoButton';
import { images } from '../../Assets/Images';

const HomeScreen: FC<IHome> = ({navigation}) => {
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
                  <LogoButton overrideStyle={{marginHorizontal : 20}} source={images.bellLogo}/>
                  <LogoButton overrideStyle={{marginHorizontal : 20}} source={images.historyLogo}/>
                  <LogoButton overrideStyle={{marginHorizontal : 20}} source={images.settingLogo}/>
              
                </View>
              </View>
              <Card onPress={playlistNavigationHandler} />
              
             
            </View>

            <View>
              <Title text="Trending Now" />
              <Card onPress={playlistNavigationHandler} />
            </View>
            <View>
              <Title text="Top picks for you" />
              <Card onPress={playlistNavigationHandler} />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
