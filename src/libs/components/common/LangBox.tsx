import React from 'react';

//libs
import { TxtSpan, Wrap } from '@/_ui_libs/_index';
import { colors } from '@/libs/themes/colors';

//atoms
import { langTypeAtom } from '@/libs/atoms/widgets-atom';
import { useRecoilState } from 'recoil';

//
export default function LangBox({ onClose }: { onClose: () => void }) {
  const [isLang, setIsLang] = useRecoilState(langTypeAtom);

  return (
    <Wrap
      minWidth={80}
      backgroundColor="#fff"
      borderRadius={10}
      padding={{ all: 4 }}
      css={{
        border: '1px solid #e2e2e2',
        position: 'absolute',
        top: 30,
        left: 0,
      }}
    >
      <Wrap
        padding={{ all: 8 }}
        borderRadius={6}
        css={{ '&:hover': { backgroundColor: colors.grey100 } }}
        onClick={() => setIsLang('ko')}
      >
        <TxtSpan color={isLang === 'ko' ? colors.keyColor : colors.grey800}>한국어</TxtSpan>
      </Wrap>

      <Wrap
        padding={{ all: 8 }}
        borderRadius={6}
        css={{ '&:hover': { backgroundColor: colors.grey100 } }}
        onClick={() => setIsLang('en')}
      >
        <TxtSpan color={isLang === 'en' ? colors.keyColor : colors.grey800}>English</TxtSpan>
      </Wrap>
    </Wrap>
  );
}
