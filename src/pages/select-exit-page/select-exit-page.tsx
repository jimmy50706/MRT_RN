import React, { FC, useMemo } from 'react';
import { ListPageScaffold } from '../list-page-scaffold/list-page-scaffold';
import { Text, FlatList, View } from 'react-native';
import { stationList } from '../../utils/exitData';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, AppDispathTypes } from '../../store';
import { ListItem } from 'react-native-elements';
import { setCurrentExitId } from '../../store/serchInfoState/actions';

export const SelectExitPage: FC = () => {
  const currentStationId = useSelector(
    (state: AppState) => state.serchInfoState.currentStationId
  );

  const dispatch = useDispatch<AppDispathTypes>();

  const currentStationExits = useMemo(() => {
    const currentStation = stationList.find(
      station => station.stationId === currentStationId
    );

    if (currentStation) {
      return currentStation.exit;
    }

    return [];
  }, [currentStationId]);

  return (
    <ListPageScaffold pageTitle="請選擇出口">
      <FlatList
        data={currentStationExits}
        renderItem={({ item }) => (
          <ListItem
            title={`出口  ${item.exitId} `}
            bottomDivider
            onPress={() => {
              dispatch(setCurrentExitId(item.exitId));
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ListPageScaffold>
  );
};
