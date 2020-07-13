import {book.jason} from 'react-native';
import React from 'react';
import {StyleSheet, Text,View} from 'react-native';

function LibraryScreen({navigation}) {
    
  function closeKetboard() {

    function closeKeyboard()
  }
    return(
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate("book", {title: "SDA - Commu"})}>
                Seigneur des anneaux: La communauté de l'anneau
            </Text>

            
            <Text onPress={() => navigation.navigate("book",{title: "HP - l'école"})}>
              Harry Potter
            </Text>

            <Text onPress={() => navigation.navigate("book",{title: "HG - Tome 1  "})}>
              Hunger games 
            </Text>
            
            <Text onPress={() => navigation.navigate("book",{title: "Divergente - Tome 1  "})}>
              Divergente
            </Text>
             
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default LibraryScreen;