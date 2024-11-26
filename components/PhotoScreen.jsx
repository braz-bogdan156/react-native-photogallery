import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const PhotoScreen = ({ route }) => {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.urls.regular }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default PhotoScreen;