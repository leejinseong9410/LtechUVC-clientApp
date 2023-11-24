import React, { forwardRef, useEffect, useRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';

//libs
import { Column, Container, Txt, TxtSpan, Wrap, IconTab } from '../../../_ui_libs/_index';
import { borderRadius, colors, MQ } from '../../themes/_index';

//assets
import { CancelIcon } from '@/libs/assets/icons';

//atoms
import { langTypeAtom } from '@/libs/atoms/widgets-atom';
import { useRecoilValue } from 'recoil';

//
interface Props {
  title?: string;
  context?: string;
  view: boolean;
  onCancel?: any;
}

//
export const AlartSnackbar = forwardRef(function AlartSnackbar({
  title,
  context,
  view,
  onCancel,
}: Props) {
  // 모달 고정 및 외부 클릭감지
  const snackRef = useRef<HTMLDivElement>(null);
  const langType = useRecoilValue(langTypeAtom);

  const clickModalOutside = (event: MouseEvent) => {
    if (view && !snackRef.current?.contains(event.target as Node)) onCancel();
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [view]);

  return (
    <Container
      css={
        {
          display: view ? 'flex' : 'none',
          ...theme.container,
        } as Interpolation<Theme>
      }
      ref={snackRef}
    >
      <Column css={theme.wrap}>
        {/* tab */}
        <Wrap css={theme.tabBox as Interpolation<Theme>}>
          <IconTab iconSize={18} onClick={() => onCancel()}>
            <CancelIcon width="100%" fill={colors.grey200} />
          </IconTab>
        </Wrap>

        {/* view */}
        <Wrap gap={3} css={{ padding: '16px 20px' }}>
          <Txt css={{ fontWeight: '600' }}>
            {langType === 'ko' ? '👍 요청하신 문의가 완료되었습니다' : '👍 Contact US Successful'}
          </Txt>
          <TxtSpan>
            {langType === 'ko'
              ? '해당 팝업은 아무 곳이나 클릭해도 사라집니다'
              : 'The pop-up disappears when you click anywhere'}
          </TxtSpan>
        </Wrap>
      </Column>
    </Container>
  );
});

// styled
const theme = {
  container: {
    maxWidth: '480px',
    zIndex: '99999',
    position: 'fixed',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '30px 20px',
    overflowY: 'auto',

    '::-webkit-scrollbar': {
      display: 'none',
    },

    [MQ[3]]: {
      top: 'auto',
      bottom: '0',
    },
  },

  wrap: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.s600,
    boxShadow: '0 3px 30px rgba(0, 0, 0, 0.12)',
  },

  tabBox: {
    zIndex: '500',
    width: 'auto',
    position: 'absolute',
    top: '6px',
    right: '6px',
  },
};
