import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ACCESS_KEY = 'dAR7GfrBaonjOGif3ydsHDpzLXFsgr3f3zzw5pmDjko';

const GalleryList = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos?client_id=${ACCESS_KEY}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PhotoScreen', { photo: item })}>
          <View style={styles.item}>
            <Image source={{ uri: item.urls.thumb }} style={styles.image} />
            <Text style={styles.title}>{item.alt_description}</Text>
            <Text style={styles.author}>{item.user.username}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    },
  author: {
    fontSize: 14,
    color: '#555',
   
    },
});

export default GalleryList; 