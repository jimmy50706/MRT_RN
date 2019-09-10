import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  GestureResponderEvent,
  ScrollView
} from 'react-native';
import { theme } from '../../theme/theme';
import { Button } from 'react-native-elements';
import { RouteComponentProps } from 'react-router';

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: '100%'
  },
  header: {
    height: theme.header.height,
    backgroundColor: theme.color.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    color: theme.color.secondary
  },
  navigatorButtonContainer: {
    marginBottom: 50,
    width: '60%'
  },
  navigatorButton: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: theme.color.primary
  },
  navigatorButtonTitle: {
    color: theme.color.secondary,
    fontSize: 24
  },
  scrollView: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.color.secondary,
    alignItems: 'center',
    paddingTop: 50
  }
});

const NavigatorButton: FC<{
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}> = ({ title, onPress }) => (
  <View style={styles.navigatorButtonContainer}>
    <Button
      title={title}
      buttonStyle={styles.navigatorButton}
      titleStyle={styles.navigatorButtonTitle}
      raised
      onPress={onPress}
    ></Button>
  </View>
);

export const HomePage: FC<RouteComponentProps> = ({ history }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>捷運出口</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <NavigatorButton title="行程規劃" />
        <NavigatorButton
          title="出口查詢"
          onPress={() => history.push('/select-line-page')}
        />
      </ScrollView>
    </View>
  );
};
