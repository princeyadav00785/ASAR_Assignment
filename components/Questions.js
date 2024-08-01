import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Slider from '@react-native-community/slider';


export default function Questions({ title }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(5.3);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: 'https://api-cdn.figma.com/resize/img/57c5/fb71/df12032287ec7646694d5a863b0c0115?expiration=1723420800&signature=b504d947e3c5d686de83c3a63b3ed6ab5b8beb96160dffbc73173fa4731e1afe&maxsize=2048&bucket=figma-alpha' }} style={styles.image} />
      </View>
      <Text style={styles.subtext}>
        H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0
      </Text>
      <View style={styles.buttons}>
        <Text onPress={toggleModal} style={styles.button1}>Yes $5.3</Text>
        <Text style={styles.button2}>No $4.7</Text>
      </View>
      <Modal
  isVisible={isModalVisible}
  swipeDirection={['down']}
  onSwipeComplete={toggleModal}
  style={styles.modal}
  onBackdropPress={toggleModal}
  onBackButtonPress={toggleModal}
>
  <View style={styles.modalContent}>
    <View style={styles.heading}>
      <Text style={styles.modalText}>
        Kolkata to win the match vs Mumbai?
      </Text>
      <Image
        source={{ uri: 'https://api-cdn.figma.com/resize/img/57c5/fb71/df12032287ec7646694d5a863b0c0115?expiration=1723420800&signature=b504d947e3c5d686de83c3a63b3ed6ab5b8beb96160dffbc73173fa4731e1afe&maxsize=2048&bucket=figma-alpha' }}
        style={styles.modalImage}
      />
    </View>
    <View style={styles.buttonsRow}>
      <TouchableOpacity style={styles.yesButton}>
        <Text style={styles.yesButtonText}>Yes ₹5.3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.noButton}>
        <Text style={styles.noButtonText}>No ₹4.7</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Price</Text>
      <Text style={styles.value}>₹{sliderValue.toFixed(1)}</Text>
    </View>
    <View style={styles.sliderContainer}>
      <Text style={styles.label}>₹5.3</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={0.1}
        value={sliderValue}
        onValueChange={setSliderValue}
        thumbTintColor="#000"
        minimumTrackTintColor="#7B61FF"
        maximumTrackTintColor="#d3d3d3"
      />
      <Text style={styles.label}>₹10</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>₹5.3</Text>
      <Text style={styles.label}>₹10</Text>
    </View>
    <View style={styles.swiperContainer}>
      <TouchableOpacity style={styles.swiper}>
        <Text style={styles.swiperText}>Swipe for Yes</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.balance}>Available Balance: ₹400.00</Text>
  </View>
</Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button1: {
    backgroundColor: '#ddd',
    width: '40%',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: 'blue',
    fontWeight: '600',
  },
  button2: {
    backgroundColor: '#ddd',
    width: '40%',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: 'red',
    fontWeight: '600',
  },
  image: {
    height: 40,
    width: 40,
    marginLeft: 25,
  },
  subtext: {
    marginVertical: 10,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    maxHeight: '80%',
    alignItems: 'center',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight:15
  },
  modalImage: {
    height: 40,
    width: 40,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  yesButton: {
    backgroundColor: '#7B61FF',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  yesButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  noButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  noButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7B61FF',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:25,
    width: '100%',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  swiperContainer: {
    marginVertical: 20,
    width: '100%',
  },
  swiper: {
    backgroundColor: '#7B61FF',
    padding: 22,
    borderRadius: 30,
    alignItems: 'center',
  },
  swiperText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  balance: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#888',
  },
  closeButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },

});
