import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const Name = styled.span`
  color: ${p => p.theme.colors.text};
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Number = styled.span`
  color: ${p => p.theme.colors.text};
`;

export const HoverButton = styled(IconButton)`
  :hover {
    color: red;
  }
`;
