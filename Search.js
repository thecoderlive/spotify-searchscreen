import React from 'react'
import { Image, TextInput, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import SearchResults from './SearchResults'

const Search = () => (
<ScrollView style={styles.search} showsVerticalScrollIndicator={false}>
<TextInput style={styles.art_caption} placeholder={'Art Caption'} />
<Image
    style={styles.trending_event_img}
    source={{uri: item.trending_event_img}}
    />
<Text style={styles.trending_event_title}>{item.trending_event_title}</Text>
<Text style={styles.about_trending_event}>{item.about_trending_event}</Text>
<SearchResults item={item.search_results}/>
</ScrollView>
)

export default Search;

const styles = StyleSheet.create({
    'art_caption': {
        'fontSize': 15,
        'fontWeight': '400',
        'padding': 10,
        'margin': 5,
        'backgroundColor': 'whitesmoke',
        'borderWidth': 1
    },
    'trending_event_img': {
        'width': '95vw',
        'height': '70vw',
        'marginTop': 5,
        'alignSelf': 'center',
        'borderRadius': 15
    },
    'trending_event_title': {
        'fontSize': 18,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#e09900'
    },
    'about_trending_event': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});