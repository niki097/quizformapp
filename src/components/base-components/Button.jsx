import React from 'react';
import { useDispatch } from 'react-redux';

const Button = ({buttonText, clickAction, styleClasses = []}) => {
  const dispatch = useDispatch();

  return (
    <button className={styleClasses.join(' ')}  onClick={clickAction}>
      {buttonText}
    </button>
  );
};

export default Button;