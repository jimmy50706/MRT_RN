import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RouteComponentProps, Route, Switch } from 'react-router';
import { theme } from '../../theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import { StationListPage } from '../station-list-page/station-list-page';

const styles = StyleSheet.create({
  pageContainer: {
    flexGrow: 1
  },
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

const lineList = Array.from({ length: 100 }, (item, index) => ({
  lineName: '桃園捷運',
  id: index + 1
}));

// const TagLine = <View style={styles.tagLine}></View>;

export const ExitSearchPage: FC<RouteComponentProps> = ({ history, match }) => {
  return (
    <View style={styles.pageContainer}>
      <Switch>
        <Route
          path={match.path}
          exact
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
                  <Text style={styles.headerTitle}>請選擇路線</Text>
                </View>
              </View>
              <FlatList
                data={lineList}
                renderItem={({ item }) => (
                  <ListItem
                    title={item.lineName}
                    leftIcon={
                      // TagLine
                      <Icon name="subway" size={20} color="#9D1A7C" />
                    }
                    bottomDivider
                    onPress={() => history.push(`${match.path}/${item.id}`)}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          )}
        ></Route>
        <Route path={`${match.path}/:id`} component={StationListPage} />
      </Switch>
    </View>
  );
};
