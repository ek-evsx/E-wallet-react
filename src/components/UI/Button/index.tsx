import React from 'react';

import { BUTTON_SIZE, BUTTON_COLOR, BUTTON_TYPE } from 'utils/constants';

import { ButtonUI } from './styles';

interface IProps {
  color?: BUTTON_COLOR;
  size?: BUTTON_SIZE;
  onClick?: () => void;
  children?: string | React.ReactElement;
  text?: string;
  type?: BUTTON_TYPE
};

const Button = (props: IProps) => 
  <ButtonUI 
    size={props.size} 
    color={props.color} 
    onClick={props.onClick} 
    type={props.type}
  >
    {props.text || props.children}
  </ButtonUI>;

export default Button;
