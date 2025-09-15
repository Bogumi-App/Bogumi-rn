// @types/react-native-vector-icons.d.ts
declare module 'react-native-vector-icons/Ionicons' {
  import { Component } from 'react';
  import { TextStyle, StyleProp } from 'react-native';

  interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
  }

  export default class Ionicons extends Component<IconProps> {}
}
