import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {Image, View} from 'react-native';
import {TextInput} from 'react-native';
import {styles} from './styles';
import {images} from '../../../Assets/Images';

const SearchHolder: FC<IHome> = () => {
  return (
    <View style={styles.searchContainer}>
      <Image style={styles.imageStyle} source={images.searchLogo} />
      <TextInput
        style={styles.searchText}
        placeholder="Artist, songs or podcasts"
      />
    </View>
  );
};

export default SearchHolder;
