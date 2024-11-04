
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const HeartIcon = ({ size = 26, color = "black", ...props }) => (
  <AntDesign name="hearto" size={size} color={color} {...props} />
);

export default HeartIcon;
