import React, { ReactNode, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import Aos from 'aos';

//atoms
import { useRecoilState, useRecoilValue } from 'recoil';
import { langAtom, langTypeAtom } from '../atoms/widgets-atom';

//language_json
import koNavLang from 'src/libs/language/ko/appNav.json';
import enNavLang from 'src/libs/language/en/appNav.json';
import koHomeLang from 'src/libs/language/ko/home.json';
import enHomeLang from 'src/libs/language/en/home.json';
import koContactUsLang from 'src/libs/language/ko/contactUs.json';
import enContactUsLang from 'src/libs/language/en/contactUs.json';
import ko인사말Lang from 'src/libs/language/ko/인사말.json';
import en인사말Lang from 'src/libs/language/en/인사말.json';
import ko비전Lang from 'src/libs/language/ko/비전.json';
import en비전Lang from 'src/libs/language/en/비전.json';
import ko그린암모니아Lang from 'src/libs/language/ko/그린암모니아.json';
import en그린암모니아Lang from 'src/libs/language/en/그린암모니아.json';
import ko스마트에너지Lang from 'src/libs/language/ko/스마트에너지.json';
import en스마트에너지Lang from 'src/libs/language/en/스마트에너지.json';
import ko수소융복합Lang from 'src/libs/language/ko/수소융복합.json';
import en수소융복합Lang from 'src/libs/language/en/수소융복합.json';
import ko슈퍼비전Lang from "src/libs/language/ko/슈퍼비전카메라.json"
import en슈퍼비전Lang from "src/libs/language/en/슈퍼비전카메라.json"
import koContentsLang from 'src/libs/language/ko/contents.json';
import enContentsLang from 'src/libs/language/en/contents.json';
import ko개인정보처리Lang from 'src/libs/language/ko/개인정보처리.json'
import en개인정보처리Lang from 'src/libs/language/en/개인정보처리.json'

//components
import Header from './Header';
import Footer from './Footer';

//
type LayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: LayoutProps): JSX.Element {
  const router: NextRouter = useRouter();

  const errPath = router.pathname === '/404';

  const isLangType = useRecoilValue(langTypeAtom);
  const [isLanguage, setIsLanguage] = useRecoilState(langAtom);

  useEffect(() => {
    Aos.init({ duration: 900, easing: 'ease-in-out' });
  }, []);

  useEffect(() => {
    if (isLangType === 'en') {
      setIsLanguage({
        ...isLanguage,
        nav: enNavLang,
        home: enHomeLang,
        contactUs: enContactUsLang,
        인사말: en인사말Lang,
        비전: en비전Lang,
        그린암모니아: en그린암모니아Lang,
        스마트에너지: en스마트에너지Lang,
        슈퍼비전: en슈퍼비전Lang,
        수소융복합: en수소융복합Lang,
        콘텐츠: enContentsLang,
        개인정보처리: en개인정보처리Lang,
      });
    } else {
      setIsLanguage({
        ...isLanguage,
        nav: koNavLang,
        home: koHomeLang,
        contactUs: koContactUsLang,
        인사말: ko인사말Lang,
        비전: ko비전Lang,
        그린암모니아: ko그린암모니아Lang,
        스마트에너지: ko스마트에너지Lang,
        슈퍼비전: ko슈퍼비전Lang,
        수소융복합: ko수소융복합Lang,
        콘텐츠: koContentsLang,
        개인정보처리: ko개인정보처리Lang,
      });
    }
  }, [isLangType]);

  return (
    <div id="layout">
      {!errPath && <Header />}
      <main>{children}</main>
      {!errPath && <Footer />}
    </div>
  );
}
