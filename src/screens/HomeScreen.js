import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import { GlobalStyle } from '../utils/globalstyle';
import { freeGames, paidGames, sliderData } from '../model/data';
import { windowWidth } from '../utils/Dimensions';

import BannerComponent from '../components/BannerComponent';
import GameCardComponent from '../components/GameCardComponent';
import SwitchComponent from '../components/SwitchComponent';

const HomeScreen = ({ navigation }) => {
  const renderBanner = ({ item, index }) => {
    return <BannerComponent image={item} />;
  };

  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello John Doe!</Text>

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('./../assets/images/user-profile.jpg')}
              style={styles.headerImage}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.search}>
          <Feather
            name="search"
            size={20}
            color={GlobalStyle.foregroundColor}
            style={{ marginRight: 5, paddingTop: 15 }}
          />
          <TextInput placeholder="search" />
        </View>

        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Upcoming Games</Text>
          <TouchableOpacity>
            <Text style={{ color: GlobalStyle.foregroundColor }}>See all</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 30}
          itemWidth={300}
          loop={true}
        />

        <View>
          <SwitchComponent
            selectionMode={1}
            option1={'Free Games'}
            option2={'Paid Games'}
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map((item) => (
            <GameCardComponent key={item.id} data={item} />
          ))}
        {gamesTab == 2 &&
          paidGames.map((item) => (
            <GameCardComponent key={item.id} data={item} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: GlobalStyle.backgroundColor,
    padding: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: GlobalStyle.foregroundColor,
    fontSize: 15,
    fontWeight: 'bold'
  },
  headerImage: {
    width: 35,
    height: 35
  },
  search: {
    flexDirection: 'row',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#c6c6c6',
    marginVertical: 10,
    paddingLeft: 5
  },
  placeholder: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  placeholderText: {
    color: GlobalStyle.foregroundColor,
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default HomeScreen;
