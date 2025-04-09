import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import music_data from "./music-data.json"
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearcBar';

function App() {

  const [List, setList] = useState(music_data)

  const renderSong = ({item}) => <SongCard song = {item} />

  const renderSperator = () => <View style={styles.sperator} />

  const handleSearch = text =>  { 
        const filteredList = music_data.filter(song => {
        const searcedText = text.toLowerCase();
        const currentTitle = song.title.toLowerCase();

        return currentTitle.indexOf(searcedText) > -1;
    });

    setList(filteredList);
    } 
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList
        keyExtractor={(item) => item.id}
        data={List}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSperator}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  sperator: {
    borderWidth: 1,
    borderColor: "#e0e0e0"
  }
});

