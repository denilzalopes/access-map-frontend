import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

export const ObstacleMarker = ({type, severity}) => {
  // Fonction pour déterminer la couleur en fonction de la sévérité
  const getMarkerColor = severity => {
    switch (severity) {
      case 'high':
        return '#FF0000';
      case 'medium':
        return '#FFA500';
      case 'low':
        return '#FFFF00';
      default:
        return '#CCCCCC';
    }
  };

  // Calculer la couleur une fois et la transmettre comme prop
  const markerColor = getMarkerColor(severity);

  return (
    <MarkerContainer color={markerColor}>
      <MarkerIcon color={markerColor} />
      <MarkerText>{type}</MarkerText>
    </MarkerContainer>
  );
};

// Styled-components
const MarkerContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  background-color: ${props => props.color};
`;

const MarkerIcon = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.color};
`;

const MarkerText = styled.Text`
  color: #000;
  font-size: 12px;
  margin-top: 5px;
`;
