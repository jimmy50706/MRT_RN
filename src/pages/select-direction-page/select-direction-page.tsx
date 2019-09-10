import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { ListItem } from 'react-native-elements';
import { ListPageScaffold } from '../list-page-scaffold/list-page-scaffold';
import { stationList } from '../../utils/exitData';

export const SelectDirectionPage: FC<
  RouteComponentProps<{ stationId: string }>
> = ({ history }) => {
  return (
    <ListPageScaffold pageTitle="請選擇行駛方向">
      <View style={{ flexGrow: 1 }}>
        <ScrollView>
          <ListItem
            title="往新店"
            bottomDivider
            onPress={() => history.push('/select-exit-page')}
          />
          <ListItem
            title="往松山"
            bottomDivider
            onPress={() => history.push('/select-exit-page')}
          />
        </ScrollView>
      </View>
    </ListPageScaffold>
  );
};
