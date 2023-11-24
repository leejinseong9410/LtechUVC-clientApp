/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//components
import { Drawer } from './Drawer';

//libs
import { AppBar, IconTab, Items, Item, Wrap, Row, Txt, TxtSpan } from '@/_ui_libs/_index';
import { fontSize, colors, MQ } from '@/libs/themes/_index';

//assets
import { LangIcon, ToastIcon } from '@/libs/assets/icons';
import { Logo } from '../assets/images';

//menu
import Menus from '../components/common/Menus';
import LangBox from '../components/common/LangBox';

//atoms
import { useRecoilState, useRecoilValue } from 'recoil';
import { drawerAtom, langTypeAtom } from '../atoms/widgets-atom';

//
export default function Header() {
  const router = useRouter();
  const indexPath = router.pathname === '/';
  const langRef = useRef<HTMLDivElement>(null);

  const languageType = useRecoilValue(langTypeAtom);
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom);
  const [isHovered, setIsHovered] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleActiveDrawer = useCallback(() => setIsDrawer(!isDrawer), [isDrawer]);

  //
  /// 스크롤 시 헤더 활성화
  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) setIsActive(true);
        else setIsActive(false);
      }),
    [],
  );

  //
  /// 언어 번역 핸들러
  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (isClick && langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsClick(false);
      }
    },
    [isClick, langRef],
  );

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  //
  /// theme 활성화
  const themeActive = (type: 'logo' | 'color' | 'langIcon') => {
    if (type === 'logo') {
      return indexPath ? (isActive || isHovered ? colors.keyColor : colors.white) : colors.keyColor;
    }
    if (type === 'color') {
      return indexPath ? (isActive || isHovered ? colors.grey900 : colors.white) : colors.grey900;
    }
    if (type === 'langIcon') {
      return indexPath ? (isActive || isHovered ? colors.keyColor : colors.white) : colors.keyColor;
    }
  };

  return (
    <>
      <AppBar width={1640} borderActive={isHovered}>
        <Row
          align="center"
          height="100%"
          crossAlign="space-between"
          padding={{ left: 16, right: 10 }}
        >
          <Link href="/" css={LogoTheme()}>
            <Logo width="100%" fill={themeActive('logo')} />
          </Link>

          <Items onMouseEnter={() => setIsHovered(true)} css={MenuItemTheme()}>
            {(languageType === 'ko'
              ? ['회사소개', '사업영역', '프로젝트', '미디어', '자료실']
              : ['Company', 'Business', 'Projects', 'Media', 'Reference']
            ).map((item: string) => (
              <Item key={item} css={MenuTheme()}>
                <Txt size={fontSize.s16} color={themeActive('color')}>
                  {item}
                </Txt>
              </Item>
            ))}
          </Items>

          <Row width="auto" align="center" gap={14}>
            <Row
              ref={langRef}
              onClick={() => setIsClick(!isClick)}
              width="auto"
              align="center"
              gap={8}
              css={{ cursor: 'pointer' }}
            >
              <LangIcon width={17} fill={themeActive('langIcon')} css={{ marginTop: 2 }} />

              <TxtSpan size={13} color={themeActive('color')}>
                {languageType === 'ko' ? '한국어' : 'English'}
              </TxtSpan>

              {isClick && <LangBox onClose={() => setIsClick(false)} />}
            </Row>

            <IconTab
              onClick={handleActiveDrawer}
              iconSize={24}
              css={{ display: 'none', [MQ[1]]: { display: 'flex' } }}
            >
              <ToastIcon fill={themeActive('color')} width="100%" height="100%" />
            </IconTab>
          </Row>
        </Row>
      </AppBar>

      {/* 드로어 메뉴 */}
      <Drawer />

      {/* 메뉴박스 */}
      {isHovered && (
        <Wrap
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          css={MenusBoxTheme()}
          align="center"
        >
          <Menus onCancelHover={() => setIsHovered(false)} />
        </Wrap>
      )}
    </>
  );
}

//
/// styled
const LogoTheme = (): Interpolation<Theme> => {
  return {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 190,
    minWidth: 190,
    [MQ[1]]: { maxWidth: 140, minWidth: 140 },
  };
};

const MenuItemTheme = (): Interpolation<Theme> => {
  return {
    width: 'auto',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    [MQ[1]]: { display: 'none' },
  };
};

const MenusBoxTheme = (): Interpolation<Theme> => {
  return {
    zIndex: 100,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
    padding: '120px 10px 30px',

    [MQ[1]]: {
      display: 'none',
    },
  };
};

const MenuTheme = (): Interpolation<Theme> => {
  return {
    width: 'auto',
    minWidth: 130,
    maxWidth: 130,
    padding: '10px 0',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };
};
