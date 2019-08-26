import React, { FC } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { RouteComponentProps, Route, Switch } from 'react-router';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../theme/theme';
import { SelectDirectionPage } from '../select-direction-page/select-direction-page';

const styles = StyleSheet.create({
  header: {
    height: theme.header.height,
    backgroundColor: theme.color.primary,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    color: theme.color.secondary,
    marginRight: 50
  },
  backButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitleContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 20
  },
  tagLine: {
    width: 7,
    height: '100%',
    borderRadius: 15,
    backgroundColor: 'green'
  }
});

const stationList = Array.from({ length: 30 }, (item, index) => ({
  stationName: '台北車站',
  id: index + 1
}));

export const StationListPage: FC<RouteComponentProps<{ id: string }>> = ({
  history,
  match
}) => {
  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => (
          <>
            <View style={styles.header}>
              <Icon.Button
                backgroundColor="rgba(0,0,0,0)"
                name="arrow-left"
                size={15}
                color="white"
                style={styles.backButton}
                onPress={() => history.goBack()}
              />
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>
                  請選擇車站{match.params.id}
                </Text>
              </View>
            </View>
            <FlatList
              data={stationList}
              renderItem={({ item }) => (
                <ListItem
                  title={item.stationName}
                  leftIcon={<View style={styles.tagLine}></View>}
                  bottomDivider
                  onPress={() => {
                    history.push(`${match.url}/${item.id}`);
                  }}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        )}
      />
      <Route path={`${match.url}/:stationId`} component={SelectDirectionPage} />
    </Switch>
  );
};
