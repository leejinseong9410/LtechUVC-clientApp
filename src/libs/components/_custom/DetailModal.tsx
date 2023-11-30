/** @jsxImportSource @emotion/react */
import React, { ReactNode, useCallback, useEffect, useRef, HTMLAttributes } from 'react';

import { ViewportTheme } from '@/_ui_libs/_theme';
import { Column, Layer, Padding, Row, Txt, TxtTab, Wrap } from '@/_ui_libs/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langTypeAtom } from '@/libs/atoms/widgets-atom';
import { useRouter } from 'next/router';
import { MQ } from '@/libs/themes/media';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  view: boolean;
  onCancel: () => void;
  title?: string;
  context?: any;
  maxHeigth?: number;
}

// ------------------------------------
// --------------  --------------
// ------------------------------------
export function DetailModal({
  children,
  view,
  onCancel,
  title,
  context,
  maxHeigth = 1000,
  ...props
}: Props) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const langType = useRecoilValue(langTypeAtom);

  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (view && ref.current && !ref.current.contains(event.target as Node)) {
        onCancel();
      }
    },
    [view, onCancel],
  );

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [clickModalOutside, view]);

  return (
    <>
      <Layer isActive={view} />
      <Padding
        safeArea
        height="100%"
        horizontal={16}
        vertical={30}
        align="center"
        crossAlign="center"
        css={ViewportTheme({
          zIndex: 9999,
          position: { type: 'fixed', top: view ? 0 : ' 150%', bottom: 0, left: 0, right: 0 },
        })}
      >
        <Column
          maxWidth={600}
          maxHeight={maxHeigth}
          height="100%"
          borderRadius={18}
          backgroundColor="#ffffff"
          boxShadow={{ x: 0, y: 2, blur: 20, color: 'rgba(0,0,0,0.1' }}
          ref={ref}
          {...props}
        >
          <Row
            padding={{ vertical: 20, left: 20, right: 12 }}
            crossAlign="space-between"
            align="center"
            gap={30}
          >
            <Column gap={6}>
              <Txt as="strong" size={18} ellipsis={{ ellipsis: true, line: 1 }}>
                {title}
              </Txt>
              {context}
            </Column>

            <TxtTab
              size={15}
              color="#666"
              padding={{ vertical: 8, horizontal: 10 }}
              css={{ '&:hover': { backgroundColor: '#f5f5f5', borderRadius: 8 } }}
              onClick={() => onCancel()}
            >
              {langType === 'ko' ? '닫기' : 'close'}
            </TxtTab>
          </Row>

          <Wrap
            height="100%"
            scroll={{ type: 'scroll', bar: false }}
            align="center"
            crossAlign="center"
          >
            {children}
          </Wrap>
        </Column>
      </Padding>
    </>
  );
}
