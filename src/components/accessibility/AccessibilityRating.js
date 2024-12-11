import React from 'react';
import styled from 'styled-components/native';

export const AccessibilityRating = ({rating}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i} filled={i <= rating}>
          ★
        </Star>,
      );
    }
    return stars;
  };

  return (
    <RatingContainer>
      {renderStars()}
      <RatingText>{`${rating}/5`}</RatingText>
    </RatingContainer>
  );
};

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Star = styled.Text`
  color: ${props => (props.filled ? '#FFD700' : '#E0E0E0')};
  font-size: 24px;
`;

const RatingText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
`;
