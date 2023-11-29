import React from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//libs
import { Item, Items, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors } from '@/libs/themes/_index';

//atoms
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { drawerAtom, langAtom, menuHoverAtom } from '@/libs/atoms/widgets-atom';

//
export default function Menus({ onCancelHover }: { onCancelHover?: any }) {
  const setIsDrawer = useSetRecoilState(drawerAtom);
  const setIsHover = useSetRecoilState(menuHoverAtom);

  const isLang = useRecoilValue(langAtom);
  const menu = isLang?.nav?.category;

  return (
    <Items
      direction="horizontal"
      maxWidth={650}
      align="start"
      crossAlign="space-between"
      css={{ [MQ[1]]: { flexDirection: 'column' } }}
    >
      {menu?.map((item: any) => (
        <Item key={item?.title} css={MenuBox()}>
          <TxtSpan size={15} weight="medium" color={colors.grey900} padding={{ bottom: 10 }}>
            {item?.title}
          </TxtSpan>

          {item?.menus?.map((el: { title: string; path: string }) => (
            <Link
              key={el?.title}
              href={el?.path}
              css={LinkTheme()}
              onClick={() => {
                setIsDrawer(false);
                setIsHover(false);
              }}
            >
              {el.title}
            </Link>
          ))}
        </Item>
      ))}
    </Items>
  );
}

//
/// style
const MenuBox = (): Interpolation<Theme> => {
  return {
    minWidth: '130px',
    maxWidth: '130px',
    display: 'flex',
    alignItems: 'center',

    [MQ[1]]: {
      minWidth: '100%',
      maxWidth: '100%',
      padding: '16px 0 10px',
      borderBottom: '1px solid #eee',
    },
  };
};

const LinkTheme = (): Interpolation<Theme> => {
  return {
    fontSize: 13,
    padding: '12px 0',
    color: colors.grey800,

    '&:hover': {
      borderBottom: '2px solid #555',
    },
  };
};
