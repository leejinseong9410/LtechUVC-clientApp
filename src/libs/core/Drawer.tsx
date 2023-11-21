/** @jsxImportSource @emotion/react */
import React, { memo } from 'react';

//libs
import { AppDrawer, Wrap } from '@/_ui_libs/_index';
import { MQ } from '../themes/_index';

//atoms
import { drawerAtom } from '../atoms/widgets-atom';
import { useRecoilState } from 'recoil';

//components
import Menus from '../components/common/Menus';

//
export const Drawer = memo(function Drawer() {
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom);

  return (
    <Wrap css={{ display: 'none', [MQ[1]]: { display: 'flex' } }}>
      <AppDrawer view={isDrawer} onCancel={() => setIsDrawer(false)}>
        <Wrap padding={{ top: 10, bottom: 30, horizontal: 16 }}>
          <Menus />
        </Wrap>
      </AppDrawer>
    </Wrap>
  );
});
