import React from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

export const Deck = ({ data, renderCard }) => {
  const renderCards = () => {
    return data.map(item => {
      return renderCard(item);
    })
  }

  return (
    <View>
      {renderCards()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})