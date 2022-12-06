import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const searchResultsItem = ({ item }) => (
<View style={styles.search_results_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
</View>
  );

const SearchResults = ({ item }) => (
<FlatList
    style={styles.search_results}
    data={item}
    renderItem={searchResultsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default SearchResults;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '45vw',
        'height': '25vw',
        'marginTop': 5,
        'borderRadius': 4,
        'margin': 8
    }
});