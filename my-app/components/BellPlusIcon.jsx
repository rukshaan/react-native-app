
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BellPlusIcon = ({ size = 26, color = "black", ...props }) => (
  <MaterialCommunityIcons name="bell-plus-outline" size={size} color={color} {...props} />
);

export default BellPlusIcon;
