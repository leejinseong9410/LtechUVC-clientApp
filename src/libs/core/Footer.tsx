import React from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//libs
import { MQ, colors } from '@/libs/themes/_index';
import { Column, Item, Items, LinkHref, Padding, Row, Txt, TxtSpan } from '@/_ui_libs/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '@/libs/atoms/widgets-atom';

//assets
import { Tiktok, Instargram, X, YoutubeIcon } from '../assets/icons';
import { Logo } from '../assets/images';

//
export default function Footer() {
  const isLang = useRecoilValue(langAtom);
  const langType = useRecoilValue(langTypeAtom)
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
        <Padding margin={{ top: 20}} gap={20}>
        <LinkHref a="/policy/privacy" txtSize={16} weight='bold' colors={{ txt: "#000000"}}>{langType === 'ko' ? "개인정보처리방침" : "Privacy Policy" }</LinkHref>
        </Padding>
        <Column margin={{ top: 60 }} gap={20} >
          <Row align='center' gap={35}>
          <Link
            href="https://www.youtube.com/channel/UCaypchzm47bpQPlY0Cr1wzw?app=desktop"
            target="_blank"
          >
            <YoutubeIcon width="40px" />
          </Link>
          <Link
            href="https://www.instagram.com/ltechuvc/"
            target="_blank"
          >
            <Instargram width="45px"/>
          </Link>
          <Link
            href="https://www.tiktok.com/@ltechuvc/"
            target="_blank"
          >
            <Tiktok width="40px"/>
          </Link>
          <Link
            href="https://twitter.com/LTechUVC"
            target="_blank"
          >
            <X width="40px"/>
          </Link>
          </Row>
          <Column gap={10}>
            <Row align='center' gap={20}>
            <Logo width="120px" fill={colors.keyColor} />
          <TxtSpan size={12} color={colors.grey600}>
           ⓒ LTechUVC Inc.
          </TxtSpan>
            </Row>
          <Column gap={5}>
          <TxtSpan size={12} color={colors.grey600}>
            {langType === 'ko' ? "오시는 길 | 서울 강남구 영동대로 607 (삼성동, 랜드마크빌딩) 13층" : "Contact | 607, Yeongdong-daero, Gangnam-gu, Seoul, Republic of Korea" } 
          </TxtSpan>
          <TxtSpan size={12} color={colors.grey600}>
            TEL | 02-2039-1568
          </TxtSpan>
          </Column>
          </Column>
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
