import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { theme } from '../../theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import { withRouter, RouteComponentProps } from 'react-router';

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

interface Props {
  pageTitle: string;
}

const ListPageScaffold: FC<Props & RouteComponentProps> = ({
  children,
  history,
  pageTitle
}) => {
  return (
    <View style={styles.pageContainer}>
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
            <Text style={styles.headerTitle}>{pageTitle}</Text>
          </View>
        </View>
        {children}
      </>
    </View>
  );
};

const ListPageScaffoldWithRouter = withRouter(ListPageScaffold);

export { ListPageScaffoldWithRouter as ListPageScaffold };
