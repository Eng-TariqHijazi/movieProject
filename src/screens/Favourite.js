import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {FavouriteContext} from '../context/ListContext';
import Icon from 'react-native-vector-icons/AntDesign';

const Favourite = ({navigation}) => {
  const {favourite, setFavourite} = useContext(FavouriteContext);

  const renderItem = ({item}) => {
    return (
      <ImageBackground
        style={styles.cardImg}
        resizeMode={'stretch'}
        source={item.img}>
        <Icon
          name={item.favourite ? 'heart' : 'hearto'}
          color="red"
          style={styles.heart}
          size={20}
          onPress={() => {
            item.favourite = !item.favourite;
            !item.favourite
              ? setFavourite(pre => {
                  return pre.filter(favitem => favitem.id !== item.id);
                })
              : setFavourite(pre => {
                  return [...pre, item];
                });
          }}
        />
        <Text style={styles.textCard}>{item.name}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.favourite}>
        <Icon
          name="arrowleft"
          size={25}
          color="#000000"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.textFav}>Favourite</Text>
      </View>
      <FlatList
        data={favourite}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 15,
    height: '98%',
  },
  cardImg: {
    width: 160,
    height: 190,
    margin: 15,
    borderRadius: 20,
  },
  heart: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  favourite: {
    flexDirection: 'row',
    alignItems: 'baseline',
    width: '80%',
    marginTop: 15,
    alignSelf: 'center',
  },
  textFav: {
    fontSize: 30,
    fontWeight: '400',
    color: '#000000',
    left: 80,
    marginBottom: 25,
  },
  textCard: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 150,
    marginLeft: 10,
  },
});
