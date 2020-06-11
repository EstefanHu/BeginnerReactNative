import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
} from 'react-native';

export const Deck = ({ data, renderCard }) => {
  const panResponder = PanResponder.create({

  });

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