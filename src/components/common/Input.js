import React from 'react';
import styled from 'styled-components/native';

export const AccessInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <InputContainer>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#888"
      />
    </InputContainer>
  );
};

const InputContainer = styled.View`
  margin-vertical: 10px;
`;

const StyledInput = styled.TextInput`
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
  border-width: 1px;
  border-color: #ddd;
`;
