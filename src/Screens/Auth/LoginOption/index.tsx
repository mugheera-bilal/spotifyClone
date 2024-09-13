import {FC, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../../Components/Ui/CustomButton';
import {images} from '../../../Assets/Images';
import {styles} from './styles';
import { IHome } from '../../../Constants/Interfaces';
import { fetchSpotifyToken, getCategories } from '../../../Apis';

const LoginOption : FC <IHome> = ({navigation}) =>  {

const [browseCategories , setBrowseCategories] = useState([])

  useEffect(() => {
    const init = async () => {
      const token = await fetchSpotifyToken();
      console.log('..........' , token);
      
      if (token) {
        const response = await getCategories(); 
        const categoryNames = response.data.categories.items.map(
          category => category.name,
        );
        console.log('Category Names ========>', categoryNames);
        setBrowseCategories(categoryNames)
        
      }
    };
  
    init();
  } , [])

    function signupNavigationHandler () {
        navigation.navigate('signup')
    }
    
    
    function loginNavigationHandler () {
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
        <CustomButton onPress={signupNavigationHandler} extraStyle={styles.signupButton}>Sign Up</CustomButton>
        <CustomButton ImgStyle={styles.mobileLogoStyle} imageSource={images.mobileLogo}>Continue with Phone Number</CustomButton>
        <CustomButton ImgStyle={styles.logoStyle} imageSource={images.googleLogo}>Continue with Google</CustomButton>
        <CustomButton ImgStyle={styles.logoStyle} imageSource={images.fbLogo}>Continue with Facebook</CustomButton>
        <CustomButton onPress= {loginNavigationHandler} extraStyle={styles.loginButton}>Login</CustomButton>
      </View>
    </View>
  );
}

export default LoginOption;
