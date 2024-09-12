import {FC} from 'react';
import {IHome} from '../../../Constants/Interfaces';
import {Pressable, SectionList, Text, View} from 'react-native';
import {styles} from './styles';
import {SEARCHDATA} from '../../../Util/SearchData';
import Title from '../Title';

const COLORS = [
  '#FFA07A',
  '#20B2AA',
  '#FF6347',
  '#4682B4',
  '#2e8f4e',
  '#6f1ed8',
];

const SearchCard: FC<IHome> = ({onPress}) => {
  return (
    <SectionList
      sections={SEARCHDATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item, index}) => {
        const backgroundColor = COLORS[index % COLORS.length];
        return (
          <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>

          <View style={[styles.boxContainer, {backgroundColor}]}>
            <Text style={styles.textStyle}>{item}</Text>
          </View>
          </Pressable>
        );
      }}
      renderSectionHeader={({section: {title}}) => (
        <View style={{minWidth : '100%'}}>
          <Title text={title} />
        </View>
      )}
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    />
  );
};

export default SearchCard;
