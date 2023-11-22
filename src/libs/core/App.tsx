import React, { ReactNode, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';

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
    if (isLangType === 'en') {
      setIsLanguage({
        ...isLanguage,
        nav: enNavLang,
        home: enHomeLang,
        contactUs: enContactUsLang,
        인사말: en인사말Lang,
        비전: en비전Lang,
      });
    } else {
      setIsLanguage({
        ...isLanguage,
        nav: koNavLang,
        home: koHomeLang,
        contactUs: koContactUsLang,
        인사말: ko인사말Lang,
        비전: ko비전Lang,
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
