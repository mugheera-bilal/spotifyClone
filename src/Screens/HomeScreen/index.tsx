import {FC} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Title from '../../Components/Ui/Title';
import IconButton from '../../Components/Ui/IconButton';
import Card from '../../Components/Ui/Card';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../Constants/Colors/theme';

const HomeScreen: FC<IHome> = ({navigation}) => {

  function playlistNavigationHandler() {
    navigation.navigate('Playlist')
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
                <Title text='Made for you' />
                <View style={styles.iconContainer}>
                  <IconButton name="notifications-outline" color="white" size={30} />
                  <IconButton name="timer-outline" color="white" size={30}/>
                  <IconButton name="settings-outline" color="white" size={30} />
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Card onPress={playlistNavigationHandler}/>
                <Card />
              </View>
            </View>

            <View>
              <Title text='Trending Now' />
              <View style={{flexDirection: 'row'}}>
                <Card />
                <Card />
                <Card />
              </View>
            </View>
            <View>
              <Title text='Top picks for you' />
              <View style={{flexDirection: 'row'}}>
                <Card />
                <Card />
                <Card />
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
