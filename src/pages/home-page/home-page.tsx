import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  GestureResponderEvent
} from 'react-native';
import { theme } from '../../theme/theme';
import { Button } from 'react-native-elements';
import { RouteComponentProps } from 'react-router';

const styles = StyleSheet.create({
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
  mainContent: {
    flexBasis: '100%',
    backgroundColor: theme.color.secondary,
    alignItems: 'center'
  },
  navigatorButtonContainer: {
    marginTop: 50
  },
  navigatorButton: {
    height: Dimensions.get('window').width * 0.6,
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: theme.color.primary
  },
  navigatorButtonTitle: {
    color: theme.color.secondary,
    fontSize: 24
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
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>捷運出口</Text>
      </View>
      <View style={styles.mainContent}>
        <NavigatorButton title="行程規劃" />
        <NavigatorButton
          title="出口查詢"
          onPress={() => history.push('/exit-search-page')}
        />
      </View>
    </View>
  );
};
