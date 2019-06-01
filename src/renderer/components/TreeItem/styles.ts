import styled, { css } from 'styled-components';

import { centerIcon } from '~/renderer/mixins';
import { icons } from '~/renderer/constants/icons';
import { transparency } from '~/renderer/constants';

export const StyledTreeItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding-left: 12px;
  margin-top: 4px;
  align-items: center;
  cursor: pointer;
`;

export const DropIcon = styled.div`
  min-width: 24px;
  min-height: 24px;
  background-image: url(${icons.dropDown});
  transition: 0.2s transform;
  ${centerIcon(20)};

  ${({ visible, selected }: { visible: boolean, selected: boolean }) => css`
    opacity: ${visible ? transparency.icons.inactive : 0};
    transform: ${selected ? 'rotate(-90deg)' : 'rotate(0deg)'};
  `};
`;

export const FolderIcon = styled.div`
  min-width: 24px;
  min-height: 24px;
  opacity: ${transparency.icons.inactive};
  background-image: url(${icons.folder});
  margin-left: 6px;
  ${centerIcon(20)};
`;

export const Label = styled.div`
  font-size: 13px;
  margin-left: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;