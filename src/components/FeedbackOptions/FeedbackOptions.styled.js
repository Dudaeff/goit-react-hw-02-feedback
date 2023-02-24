import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 30px;
  color: white;
  border: 1px solid black;
`;

export const Good = styled(Button)`
  background-color: green;
`;

export const Neutral = styled(Button)`
  background-color: darkgray;
`;

export const Bad = styled(Button)`
  background-color: red;
`;
