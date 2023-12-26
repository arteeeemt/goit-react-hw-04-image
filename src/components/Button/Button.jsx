import React from 'react';
import { LoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
};
export default Button;