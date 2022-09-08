import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 20px;

  border-bottom: solid 1px rgba(100, 100, 150, 0.15);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 0px 3px 0px 0px rgba(100, 100, 150, 0.15);
  }
`;
