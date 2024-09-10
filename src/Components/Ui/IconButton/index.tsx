import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {Pressable, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const IconButton: FC<IHome> = ({name, color, onPress}) => {
  return (
    <Pressable onPress={onPress} style={{marginHorizontal : 20}}>
      <Ionicons name={name} color={color} size={30} />
    </Pressable>
  );
};

export default IconButton;
