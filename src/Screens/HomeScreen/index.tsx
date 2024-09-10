import {FC} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Title from '../../Components/Ui/Title';
import IconButton from '../../Components/Ui/IconButton';
import Card from '../../Components/Ui/Card';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../Constants/Colors/theme';

const HomeScreen: FC<IHome> = () => {
  return (
    <>
    <ScrollView>

      <LinearGradient
        colors={['#858181', '#363535', '#161515']}
        style={{flex: 1}}>
        <View style={styles.rootContainer}>
          <View>
            <View style={styles.titleIcon}>
              <Title>Made for you</Title>
              <View style={styles.iconContainer}>
                <IconButton name="notifications-outline" color="white" />
                <IconButton name="timer-outline" color="white" />
                <IconButton name="settings-outline" color="white" />
              </View>
            </View>
            <Card />
          </View>

          <View>
            <Title>Trending Now</Title>
            <Card />
          </View>
          <View>
            <Title>Top picks for you</Title>
            <Card />
          </View>
        </View>
      </LinearGradient>
            </ScrollView>
    </>
  );
};

export default HomeScreen;
