import {Children, FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {Pressable, Text, View} from 'react-native';
import { styles } from './styles';

const CustomButton: FC<IHome> = ({children, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
