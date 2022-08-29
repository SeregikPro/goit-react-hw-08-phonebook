import styled from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  border,
  shadow,
} from 'styled-system';

const Box = styled('div')(
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  border,
  shadow
);

export default Box;
