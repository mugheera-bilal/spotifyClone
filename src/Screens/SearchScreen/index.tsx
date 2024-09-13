import {ScrollView, Text, View} from 'react-native';
import {IHome} from '../../Constants/Interfaces';
import {FC, useEffect, useState} from 'react';
import Title from '../../Components/Ui/Title';
import {styles} from './styles';
import SearchHolder from '../../Components/Ui/SearchHolder';
import SearchCard from '../../Components/Ui/SearchCard';
import { fetchSpotifyToken, getCategories } from '../../Apis';

const SearchScreen: FC<IHome> = () => {
  const [browseCategories , setBrowseCategories] = useState([])

const SEARCHDATA = [
    {
      title: 'Your Top Genres',
      data: ['Pop', 'Bollywood'],
    },
    {
      title: 'Browse All',
      data: browseCategories,
    }
  ];


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

  return (
    <>
        <View style={styles.container}>
          <Title extraTitle={styles.titleStyle} text='Search'/>

          <SearchHolder />

          <SearchCard searchingCategories={SEARCHDATA}/>

         
        </View>
    </>
  );
};

export default SearchScreen;
