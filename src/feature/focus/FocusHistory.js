import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { fontSizes, spaces } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundeButton';

const HistoryItem = ({ item, index }) => {
  return (
    <Text style={styles.historyItem(item.status)}>
      {item.subject}
    </Text>
  );
}

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  }

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}> Focused Thing here</Text>

            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearCOntainer}>
              <RoundedButton
                size={75}
                onPress={() => onClear()}
                title='clear'
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),

  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },

  clearCOntainer: {
    alignItems: 'center',
    padding: spaces.md
  }
})
