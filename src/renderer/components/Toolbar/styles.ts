import styled from 'styled-components';

import { TOOLBAR_HEIGHT } from '~/renderer/constants';

export const StyledToolbar = styled.div`
  width: 100%;
  height: ${TOOLBAR_HEIGHT}px;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-right: 24px;
  background-color: #fff;
`;

export const Search = styled.div`
  width: 300px;
  margin-left: 16px;
  height: 32px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 8px;
`;
