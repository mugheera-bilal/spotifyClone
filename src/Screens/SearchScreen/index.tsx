import {ScrollView, Text, View} from 'react-native';
import {IHome} from '../../Constants/Interfaces';
import {FC, useEffect, useState} from 'react';
import Title from '../../Components/Ui/Title';
import {styles} from './styles';
import SearchHolder from '../../Components/Ui/SearchHolder';
import SearchCard from '../../Components/Ui/SearchCard';
import { getCategories, getGenres} from '../../Apis';

const SearchScreen: FC<IHome> = () => {
  const [browseCategories, setBrowseCategories] = useState([]);
  const [genres, setGenres] = useState([]);

  const SEARCHDATA = [
    {
      title: 'Your Top Genres',
      data: genres,
    },
    {
      title: 'Browse All',
      data: browseCategories,
    },
  ];

  useEffect(() => {
    const init = async () => {
   
        const responseCategories = await getCategories();
        if (responseCategories) {
          const categoryNames = responseCategories.data.categories.items.map(
            (category: {name: any}) => category.name,
          );
          // console.log('Category Names ========>', categoryNames);
          setBrowseCategories(categoryNames);
        }

        const responseGenres = await getGenres();
        const genresName = responseGenres?.data.genres;
        // console.log('genresName',genresName);
        setGenres(genresName);
    };

    init();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Title extraTitle={styles.titleStyle} text="Search" />

        <SearchHolder />

        <SearchCard searchingCategories={SEARCHDATA} />
      </View>
    </>
  );
};

export default SearchScreen;
