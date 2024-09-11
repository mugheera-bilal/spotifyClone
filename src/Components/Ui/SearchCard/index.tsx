import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {ScrollView, SectionList, Text, View} from 'react-native';
import {styles} from './styles';
import {SEARCHDATA} from '../../../Util/SearchData';
import Title from '../Title';


const COLORS = [
  '#FFA07A',
  '#20B2AA',
  '#FF6347',
  '#4682B4',
  '#9ACD32',
  '#5f39e7',
];

const SearchCard: FC<IHome> = () => {
  return (
    <SectionList
      sections={SEARCHDATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item, index}) => {
        const backgroundColor = COLORS[index % COLORS.length];
        return (
          <View style={[styles.boxContainer, {backgroundColor}]}>
            <Text style={styles.textStyle}>{item}</Text>
          </View>
        );
      }}
      renderSectionHeader={({section: {title}}) => <Title text={title} />}
    />
  );
};

export default SearchCard;
