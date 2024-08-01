import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

const Trending = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.textItem}>
            <Image
              source={{ uri: 'https://api-cdn.figma.com/resize/img/57c5/fb71/df12032287ec7646694d5a863b0c0115?expiration=1723420800&signature=b504d947e3c5d686de83c3a63b3ed6ab5b8beb96160dffbc73173fa4731e1afe&maxsize=2048&bucket=figma-alpha' }}
              style={styles.image}
            />
            <Text style={styles.textCss}>KOL v/s MUMB</Text>
          </View>
          <View style={styles.textItem}>
            <Image
              source={{ uri: 'https://api-cdn.figma.com/resize/img/6733/d406/5abac4f432378c787b4a1df6a2aae976?expiration=1723420800&signature=4df9c584c09459d7dd2001023c89b701fcf3938c5cf60963c3cb97d002479aa5&maxsize=2048&bucket=figma-alpha' }}
              style={styles.image}
            />
            <Text style={styles.textCss}>PSG v/s Dortmund</Text>
          </View>
          <View style={styles.textItem}>
            <Image
              source={{ uri: 'https://api-cdn.figma.com/resize/img/57c5/fb71/df12032287ec7646694d5a863b0c0115?expiration=1723420800&signature=b504d947e3c5d686de83c3a63b3ed6ab5b8beb96160dffbc73173fa4731e1afe&maxsize=2048&bucket=figma-alpha' }}
              style={styles.image}
            />
            <Text style={styles.textCss}>KOL v/s MUMB</Text>
          </View>
          <View style={styles.textItem}>
          <Icon name="logo-bitcoin" size={20} color="#000" />
            <Text style={styles.textCss}>Bitcoin</Text>
          </View>
          <View style={styles.textItem}>
          <Icon name="trending-up-outline" size={20} color="#000" />
            <Text style={styles.textCss}>Growth</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.textItem}>
          <Icon name="logo-bitcoin" size={20} color="#000" />
            <Text style={styles.textCss}>Bitcoin</Text>
          </View>
          <View style={styles.textItem}>
          <Icon name="trending-up-outline" size={20} color="#000" />
            <Text style={styles.textCss}>Growth</Text>
          </View>
          <View style={styles.textItem}>
          <Image
              source={{ uri: 'https://api-cdn.figma.com/resize/img/6733/d406/5abac4f432378c787b4a1df6a2aae976?expiration=1723420800&signature=4df9c584c09459d7dd2001023c89b701fcf3938c5cf60963c3cb97d002479aa5&maxsize=2048&bucket=figma-alpha' }}
              style={styles.image}
            />
            <Text style={styles.textCss}>PSG v/s Dortmund</Text>
          </View>
          <View style={styles.textItem}>
            <Image
              source={{ uri: 'https://api-cdn.figma.com/resize/img/57c5/fb71/df12032287ec7646694d5a863b0c0115?expiration=1723420800&signature=b504d947e3c5d686de83c3a63b3ed6ab5b8beb96160dffbc73173fa4731e1afe&maxsize=2048&bucket=figma-alpha' }}
              style={styles.image}
            />
            <Text style={styles.textCss}>KOL v/s MUMB</Text>
          </View>
          <View style={styles.textItem}>
            <Image
              source={{ uri: 'https://api-cdn.figma.com/resize/img/6733/d406/5abac4f432378c787b4a1df6a2aae976?expiration=1723420800&signature=4df9c584c09459d7dd2001023c89b701fcf3938c5cf60963c3cb97d002479aa5&maxsize=2048&bucket=figma-alpha' }}
              style={styles.image}
            />
            <Text style={styles.textCss}>PSG v/s Dortmund</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
  },
  container: {
    flexDirection: 'row', 
  },
  outerContainer: {
    flexDirection: 'column', 
  },
  textItem: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white',
    padding: 12,
    margin: 6,
    borderRadius: 5,
    textAlign: 'center',
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 8,
  },
  textCss: {
    fontWeight:'bold'
  },
});

export default Trending;
