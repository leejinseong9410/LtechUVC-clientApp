import { atom } from 'recoil';

// 메뉴 드로어
export const drawerAtom = atom<boolean>({
  key: 'drawer-atom',
  default: false,
});

// 메뉴 드로어
export const menuHoverAtom = atom<boolean>({
  key: 'menu-hover-atom',
  default: false,
});

// 언어
export const langTypeAtom = atom<'ko' | 'en'>({
  key: 'language-type-atom',
  default: 'ko',
});

export const langAtom = atom<any>({
  key: 'language-atom',
  default: {
    nav: null,
    home: null,
    contactUs: null,
    인사말: null,
    비전: null,
    그린암모니아: null,
    스마트에너지: null,
    수소융복합: null,
    콘텐츠: null,
    개인정보처리: null,
  },
});
