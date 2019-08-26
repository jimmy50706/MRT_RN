import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { theme } from '../../theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RouteComponentProps } from 'react-router';
import { ListItem, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  header: {
    height: theme.header.height,
    backgroundColor: theme.color.primary,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    color: theme.color.secondary
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
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
});

export const SelectDirectionPage: FC<
  RouteComponentProps<{ stationId: string }>
> = ({ history, match }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
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
            請選擇行駛方向{match.params.stationId}
          </Text>
        </View>
        <Icon.Button
          backgroundColor="rgba(0,0,0,0)"
          name="ellipsis-v"
          size={20}
          color="white"
          style={styles.backButton}
          onPress={() => setIsModalOpen(true)}
        />
      </View>
      <View style={{ flexGrow: 1 }}>
        <ScrollView>
          <ListItem title="往南港展覽館" bottomDivider />
          <ListItem title="往頂埔" bottomDivider />
        </ScrollView>
      </View>
      {isModalOpen && (
        <View style={styles.modal}>
          <View style={{ flexBasis: '50%' }}></View>
          <Button title="close modal" onPress={() => setIsModalOpen(false)} />
        </View>
      )}
    </>
  );
};
