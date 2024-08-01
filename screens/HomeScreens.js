import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import Trending from '../components/Trending';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}> 
        <Icon name="person-outline" size={18} color="#000" style={styles.icon1} /> 
        <Icon name="notifications-outline" size={18} color="#000" style={styles.icon2} /> 
      </View>
      <View style={styles.header}>
        <Image source={{ uri: 'https://api-cdn.figma.com/resize/img/470a/0e91/8540c6559b0be243f7a71ab9fe62ec67?expiration=1723420800&signature=279706bb7b15b1c36953d1ccf9a36940d32fa273d9d7e75fb14a003760ce914d&maxsize=2048&bucket=figma-alpha' }} style={styles.headerImage} />
      </View>
      <ScrollView horizontal={true} style={styles.horizontalScrollView}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItem}> 
            <Icon name="baseball-outline" size={20} color="#000" /> 
            <Text style={styles.categoryText}>Cricket</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="logo-bitcoin" size={20} color="#000" />
            <Text style={styles.categoryText}>Crypto</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="football-outline" size={20} color="#000" />
            <Text style={styles.categoryText}>Football</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="trending-up-outline" size={20} color="#000" />
            <Text style={styles.categoryText}>Stocks</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="business-outline" size={20} color="#000" />
            <Text style={styles.categoryText}>Economy</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="newspaper-outline" size={20} color="#000" />
            <Text style={styles.categoryText}>News</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="basketball-outline" size={20} color="#000" />
            <Text style={styles.categoryText}>Basketball</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="logo-youtube" size={20} color="#000" />
            <Text style={styles.categoryText}>Youtube</Text>
          </View>
          <View style={styles.categoryItem}>
            <Icon name="trophy-outline" size={20} color="#000" />
            <Text style={styles.categoryText}>Chess</Text>
          </View>
        </View>
      </ScrollView>
      <Text style={styles.title}>Trending Now</Text>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Trending />
    </GestureHandlerRootView>
      <View style={styles.trendingContainer}>
        <Questions title="Kolkata to win the match vs Mumbai?" />
        <Questions title="Kolkata to win the match vs Mumbai?" />
        <Questions title="Kolkata to win the match vs Mumbai?" />
        <Questions title="Kolkata to win the match vs Mumbai?" />
        <Questions title="Kolkata to win the match vs Mumbai?" />
        <Questions title="Kolkata to win the match vs Mumbai?" />
        <Questions title="Kolkata to win the match vs Mumbai?" />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon1: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 15,
    padding: 5,
    backgroundColor:'#aaa'
  },
  icon2:{
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 15,
    padding: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:40,
    marginRight:20,
    marginLeft:20
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F0F0',
  },
  header: {
    height: 180,
    padding: 15,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  horizontalScrollView: {
    marginVertical: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 10,
    // backgroundColor:'#fff'
  },
  categoryItem: {
    backgroundColor:'#fff',
    alignItems: 'center',
    marginHorizontal: 5,
    padding:15,
    borderRadius:20
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  trendingContainer: {
    margin: 20,
  },
});
