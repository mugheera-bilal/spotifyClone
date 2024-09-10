import {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {images} from '../../../Assets/Images';
import InputHolder from '../../../Components/Ui/InputHolder';
import CustomButton from '../../../Components/Ui/CustomButton';
import { IHome } from '../../../Constants/Interfaces';

const  LoginScreen : FC<IHome> = ({navigation}) => {

    function signUpNavigationHandler ( ) {
        navigation.navigate('signup')
    }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={images.mainLogo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Enjoy Listening To Haram Music</Text>
      </View>
      <InputHolder placeholder='Email Address or Username'/>
      <InputHolder placeholder='Password'/>

      <CustomButton extraStyle={styles.loginButton} extraTextStyle={styles.loginText}>Login</CustomButton>
      <Text style={styles.lastText} >Don't have an account! <Text style={styles.lastTextButton} onPress={signUpNavigationHandler}>Sign Up</Text> for free</Text>
    </View>
  );
}

export default LoginScreen;
