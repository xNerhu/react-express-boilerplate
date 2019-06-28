import * as React from 'react';
import { observer } from 'mobx-react';

import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import store from '~/renderer/store';

export default observer(() => {
  return (
    <ContextMenu content="page">
      <ContextMenuItem>Refresh</ContextMenuItem>
      <ContextMenuItem disabled>New file</ContextMenuItem>
      <ContextMenuItem>New folder</ContextMenuItem>
      <ContextMenuItem>New file</ContextMenuItem>
      <ContextMenuItem disabled>Details</ContextMenuItem>
    </ContextMenu>
  );
});