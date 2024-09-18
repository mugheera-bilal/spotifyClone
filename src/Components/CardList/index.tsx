import {FC} from 'react';
import {IHome} from '../../Constants/Interfaces';
import {FlatList} from 'react-native';
import Card from '../Ui/Card';

const CardList: FC<IHome> = ({tracksRenderData, onPress}) => {
  return (
    <FlatList
      data={tracksRenderData}
      keyExtractor={item => item.id}
      horizontal={true}
      renderItem={({item}) => {
        // console.log('songs id', item.id);

        return <Card onPress={() => onPress(item.id)} item={item} />;
      }}
    />
  );
};

export default CardList;
