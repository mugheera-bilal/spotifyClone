import {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {images} from '../../../Assets/Images';
import InputHolder from '../../../Components/Ui/InputHolder';
import CustomButton from '../../../Components/Ui/CustomButton';
import {IHome} from '../../../Constants/Interfaces';

const SignupScreen: FC<IHome> = ({navigation}) => {

    function loginNavigationHandler ( ) {
        navigation.navigate('login')
    }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={images.mainLogo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Enjoy Listening To Music</Text>
      </View>
      <InputHolder placeholder="Email Address or Username" />
      <InputHolder placeholder="Password" />
      <InputHolder placeholder="Re Enter Password" />
      <CustomButton
        extraStyle={styles.signupButton}
        extraTextStyle={styles.signupText}>
        SignUp
      </CustomButton>
      <Text style={styles.lastText}>
        Already have an account! <Text style={styles.lastTextButton} onPress={loginNavigationHandler}>Log in now</Text>
      </Text>
    </View>
  );
};

export default SignupScreen;
