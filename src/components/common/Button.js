import React from 'react';
import styled from 'styled-components/native';

export const PrimaryButton = ({title, onPress, disabled = false}) => {
  return (
    <ButtonContainer onPress={onPress} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? '#CCCCCC' : '#4CAF50')};
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin: 10px 0;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
