import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

interface CircleButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
}

const CircleButton: React.FC<CircleButtonProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.circleButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const CircleButtons: React.FC = () => {
  const handleButtonPress = (buttonNumber: number) => {
    console.log(`Button ${buttonNumber} pressed`);
  };

  return (
    <View style={styles.container}>
      <CircleButton onPress={() => handleButtonPress(1)} />
      <CircleButton onPress={() => handleButtonPress(2)} />
      <CircleButton onPress={() => handleButtonPress(3)} />
      <CircleButton onPress={() => handleButtonPress(4)} />
      <CircleButton onPress={() => handleButtonPress(5)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CircleButtons;
