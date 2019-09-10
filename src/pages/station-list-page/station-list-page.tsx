import React, { FC } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { ListItem } from 'react-native-elements';
import { ListPageScaffold } from '../list-page-scaffold/list-page-scaffold';
import { stationList } from '../../utils/exitData';
import { useDispatch } from 'react-redux';
import { AppDispathTypes } from '../../store';
import {
  setCurrentLinAlias,
  setCurrentStationId
} from '../../store/serchInfoState/actions';

const styles = StyleSheet.create({
  tagLine: {
    width: 7,
    height: '100%',
    borderRadius: 15,
    backgroundColor: 'green'
  }
});

export const StationListPage: FC<RouteComponentProps<{ id: string }>> = ({
  history
}) => {
  const dispatch = useDispatch<AppDispathTypes>();

  return (
    <ListPageScaffold pageTitle="請選擇車站">
      <FlatList
        data={stationList}
        renderItem={({ item }) => (
          <ListItem
            title={item.stationName}
            leftIcon={<View style={styles.tagLine}></View>}
            bottomDivider
            onPress={() => {
              dispatch(setCurrentLinAlias(item.lineAlias));
              dispatch(setCurrentStationId(item.stationId));
              history.push('/select-direction-page');
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ListPageScaffold>
  );
};
