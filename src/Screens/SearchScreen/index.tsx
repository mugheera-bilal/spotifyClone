import {ScrollView, Text, View} from 'react-native';
import {IHome} from '../../Constants/Interfaces';
import {FC} from 'react';
import Title from '../../Components/Ui/Title';
import {styles} from './styles';
import SearchHolder from '../../Components/Ui/SearchHolder';
import SearchCard from '../../Components/Ui/SearchCard';

const SearchScreen: FC<IHome> = () => {
  return (
    <>
        <View style={styles.container}>
          <Title extraTitle={styles.titleStyle} text='Search'/>

          <SearchHolder />

          <SearchCard />

         
        </View>
    </>
  );
};

export default SearchScreen;
