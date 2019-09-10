import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { RouteComponentProps } from 'react-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import { ListPageScaffold } from '../list-page-scaffold/list-page-scaffold';

const lineList = Array.from({ length: 100 }, (item, index) => ({
  lineName: '桃園捷運',
  id: index + 1
}));

export const SelectLinePage: FC<RouteComponentProps> = ({ history, match }) => {
  return (
    <ListPageScaffold pageTitle="請選擇路線">
      <FlatList
        data={lineList}
        renderItem={({ item }) => (
          <ListItem
            title={item.lineName}
            leftIcon={<Icon name="subway" size={20} color="#9D1A7C" />}
            bottomDivider
            onPress={() => history.push('/station-list-page')}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ListPageScaffold>
  );
};
