import React from 'react';

import { BUTTON_SIZE, BUTTON_COLOR } from 'utils/constants';

import { ButtonUI } from './styles';

interface IProps {
  color?: BUTTON_COLOR;
  size?: BUTTON_SIZE;
  onClick: () => void;
  children?: string | React.ReactElement;
  text?: string;
};

const Button = (props: IProps) => 
  <ButtonUI 
    size={props.size} 
    color={props.color} 
    onClick={props.onClick} 
  >
    {props.text || props.children}
  </ButtonUI>;

export default Button;
