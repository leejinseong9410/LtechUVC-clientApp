import React from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//libs
import { MQ, colors } from '@/libs/themes/_index';
import { Column, Item, Items, TxtSpan } from '@/_ui_libs/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//assets
import { YoutubeIcon } from '../assets/icons';
import { Logo } from '../assets/images';

//
export default function Footer() {
  const isLang = useRecoilValue(langAtom);
  const menu = isLang?.nav?.category;

  return (
    <footer css={theme.footer}>
      <Column maxWidth={1080}>
        <Items
          direction="horizontal"
          maxWidth={650}
          align="start"
          crossAlign="space-between"
          css={{ [MQ[1]]: { flexDirection: 'column' } }}
        >
          {menu?.map((item: any) => (
            <Item key={item?.title} css={MenuBox()}>
              <TxtSpan size={14} weight="medium" color={colors.grey800} padding={{ bottom: 10 }}>
                {item?.title}
              </TxtSpan>

              {item?.menus?.map((el: { title: string; path: string }) => (
                <Link key={el?.title} href={el?.path} css={LinkTheme()}>
                  {el.title}
                </Link>
              ))}
            </Item>
          ))}
        </Items>

        <Column margin={{ top: 60 }} gap={20}>
          <Link
            href="https://www.youtube.com/channel/UCaypchzm47bpQPlY0Cr1wzw?app=desktop"
            target="_blank"
          >
            <YoutubeIcon width="90px" />
          </Link>
          <Logo width="120px" fill={colors.keyColor} />
          <TxtSpan size={12} color={colors.grey600}>
            Copyright © 2019 LTechUVC Inc. All rights reserved
          </TxtSpan>
        </Column>
      </Column>
    </footer>
  );
}

//
/// styled
const MenuBox = (): Interpolation<Theme> => {
  return {
    minWidth: '130px',
    maxWidth: '130px',
    display: 'flex',

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
    fontSize: 12,
    padding: '12px 0',
    color: colors.grey700,

    '&:hover': {
      borderBottom: '2px solid #555',
    },
  };
};

const theme = {
  footer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.grey100,
    padding: '60px 20px ',

    [MQ[1]]: {
      padding: '30px 20px 40px',
    },
  },
};
