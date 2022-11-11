import styled from 'styled-components';

import { colors } from 'constants/colors';

export const StyledForm = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.color};
  border-radius: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
