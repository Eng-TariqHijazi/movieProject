/* eslint-disable react-native/no-inline-styles */
import {Data, Dots} from './';
import {
  FlatList,
  ImageBackground,
  useWindowDimensions,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState, useContext} from 'react';
import {FavouriteContext} from '../context/ListContext';
export const List = () => {
  const {width} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = event => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };

  const renderItem = ({item}) => {
    return (
      <ImageBackground style={[styles.imgSlide, {width}]} source={item.img} />
    );
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          renderItem={renderItem}
          onScroll={handleOnScroll}
        />
      </View>
      <View style={styles.Dot}>
        <FlatList
          data={Data}
          keyExtractor={item1 => item1.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({index}) => {
            return <Dots index={index} activeIndex={activeIndex} />;
          }}
        />
      </View>
    </>
  );
};

export const ListFilm = ({data}) => {
  const {setFavourite} = useContext(FavouriteContext);
  const renderItem = ({item}) => {
    console.log({item});
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
    <View style={[styles.container, {left: 10}]}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Dot: {
    position: 'absolute',
    top: 210,
  },
  container: {
    alignItems: 'center',
    height: 190,
    marginVertical: 15,
  },
  imgSlide: {
    height: 190,
    alignItems: 'center',
  },
  cardImg: {
    width: 160,
    height: 190,
    marginLeft: 15,
    borderRadius: 20,
  },
  heart: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  textCard: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 150,
    marginLeft: 10,
  },
});
