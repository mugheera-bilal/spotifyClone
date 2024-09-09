import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../../Components/Ui/CustomButton';
import {images} from '../../../Assets/Images';
import {styles} from './styles';
import { IHome } from '../../../Constants/Interfaces';

const LoginOption : FC <IHome> = ({navigation}) =>  {

    function signupNavigationHandler () {
        navigation.navigate('login')
    }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={images.mainLogo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Millions of songs Free on Spotify.</Text>
      </View>

      <View>
        <CustomButton onPress={signupNavigationHandler} >Sign Up</CustomButton>
        <CustomButton>Continue with Phone Number</CustomButton>
        <CustomButton>Continue with Google</CustomButton>
        <CustomButton>Continue with Facebook</CustomButton>
        <CustomButton>Login</CustomButton>
      </View>
    </View>
  );
}

export default LoginOption;
