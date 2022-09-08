import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  padding-bottom: 20px;

  border-bottom: solid 1px rgba(100, 100, 150, 0.15);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 0px 3px 2px 2px rgba(100, 100, 150, 0.15);
  }
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  margin-right: 20px;

  cursor: pointer;

  &.active {
    color: #aa5050;
  }

  :hover {
    color: #cc8050;
  }
`;
