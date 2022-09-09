import styled from 'styled-components';

export const Book = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.accent};
  margin: 16px;
  border-radius: 20px;

  :hover > h1 {
    color: ${p => p.theme.colors.primary};
  }
`;

export const AppName = styled.h1`
  color: white;
`;
