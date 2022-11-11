import styled from "styled-components";

import { colors } from "constants/colors";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: ${props => props.type === 'button' ? '10px' : '20px'};
  background-color: ${colors.buttonBg};
  color: ${colors.button};
  border: 1px solid ${colors.buttonBorder};
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: ${colors.buttonBghoverFocus};
    outline: none;
  }
  &:active {
    background-color: ${colors.buttonBgPressed};
  }
`

export const StyledInput = styled.input`
  margin-top: 5px;
  padding:  10px;
  width: ${props => props.width || '300px'};
  border: 1px solid ${colors.color};
  border-radius: 5px;

  &:hover,
  &:focus {
    //
  }
  &:active {
    //
  }
`

export const MainSection = styled.section`
  width: 700px;
  padding: 0 20px;
`
