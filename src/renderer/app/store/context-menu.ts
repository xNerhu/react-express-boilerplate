import React from 'react';
import { observable, action } from 'mobx';
import { IPos } from 'rectangle-selection';

import { getMenuPosition } from '../utils';
import { IContextMenuData } from '~/renderer/interfaces';

export type IContextMenuContent =
  | 'page'
  | 'file'
  | 'tab'
  | 'path'
  | 'explorer'
  | 'site';

export class ContextMenuStore {
  @observable
  public visible = false;

  @observable
  public pos: IPos = [0, 0];

  @observable
  public content: IContextMenuContent = 'file';

  @observable
  public data: IContextMenuData = [];

  public ref = React.createRef<HTMLTableElement>();

  @action
  public show = (
    e: MouseEvent | React.MouseEvent<any>,
    data: IContextMenuData,
  ) => {
    if (this.ref.current) {
      window.removeEventListener('mousedown', this.hide);
      window.addEventListener('mousedown', this.hide);

      this.data = data;
      this.visible = true;
      this.pos = getMenuPosition(e, this.ref.current);
    }
  };

  public hide = () => {
    if (this.visible) {
      window.removeEventListener('mousedown', this.hide);
      this.visible = false;
    }
  };
}
