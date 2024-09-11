import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {Pressable, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const IconButton: FC<IHome> = ({name, color, size , onPress, customStyle }) => {
  return (
    <Pressable onPress={onPress} style={[{marginHorizontal : 20}, customStyle]}>
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;
