/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  List,
  ListFilm,
  DataMovie,
  DataNewMovie,
  InputFiled,
} from '../component';
export default function Home() {
  const Title = ({title}) => {
    return (
      <View style={styles.nameMovie}>
        <Text style={styles.textMovie}>{title}</Text>
        <View style={styles.Arrow}>
          <Text style={styles.textArrow}>see all</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={10}
            style={{bottom: 5, left: 5}}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <InputFiled
        placeholder={'Search for What you want..'}
        leftIcon={<Icon name="search" size={30} color={'#6C63FF'} />}
        rightIcon={
          <MaterialIcons name="keyboard-voice" size={30} color={'#6C63FF'} />
        }
        containerStyle={styles.containerStyle}
      />
      <List />
      <Title title="What's New" />
      <View>
        <ListFilm data={DataMovie} />
      </View>
      <Title title="Popular movies" />
      <ListFilm data={DataNewMovie} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerStyle: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 15,
  },
  nameMovie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginVertical: 5,
  },
  Arrow: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textMovie: {
    fontSize: 23,
    color: 'black',
  },
  textArrow: {
    fontSize: 16,
    color: '#6C63FF',
  },
});
