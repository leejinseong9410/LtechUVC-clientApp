/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ReactNode, forwardRef, useEffect, useState } from 'react';
import { MQ, colors } from '@/libs/themes/_index';
import { Padding } from './Padding';
import { FlexTheme, PaddingTheme, StyleTheme, ViewportTheme } from '../_theme';
import { useRouter } from 'next/router';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props {
  children: ReactNode;
  variant?: 'primary' | 'dark';
  width?: number;
  borderActive?: boolean;
}

// ------------------------------------
// -------------- AppBar --------------
// ------------------------------------
export const AppBar = forwardRef(function AppBar(
  { variant = 'primary', width, children, borderActive, ...props }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const router = useRouter();
  const indexPath = router.pathname === '/';

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) setIsActive(true);
        else setIsActive(false);
      }),
    [],
  );

  // VARIANTS
  const TYPE_VARIANTS = {
    primary: { color: '#e2e2e2', backgroundColor: '#ffffff' },
    dark: { color: '#252525', backgroundColor: '#181818' },
  };

  return (
    <Padding
      top={0}
      align="center"
      minHeight={indexPath ? 0 : 90}
      css={{
        transition: '0s',
        [MQ[1]]: { minHeight: indexPath ? (isActive ? '58px' : 0) : '58px' },
      }}
    >
      <header
        ref={ref}
        css={[
          ViewportTheme({
            width: '100%',
            height: '100%',
            maxHeight: 90,
            zIndex: 8998,
            position: { type: 'fixed', top: 0, left: 0, right: 0 },
          }),
          StyleTheme({
            backgroundColor: indexPath
              ? isActive
                ? colors.white
                : colors.none
              : TYPE_VARIANTS[variant].backgroundColor,
            border: {
              solid: 1,
              position: 'bottom',
              color: indexPath
                ? isActive || borderActive
                  ? TYPE_VARIANTS[variant].color
                  : colors.none
                : TYPE_VARIANTS[variant].color,
            },
          }),
          FlexTheme({ direction: 'horizontal', align: 'center', crossAlign: 'center' }),
          {
            paddingTop: 'env(safe-area-inset-top)',
            paddingRight: 'env(safe-area-inset-right)',
            paddingLeft: 'env(safe-area-inset-left)',
            [MQ[1]]: { maxHeight: '58px' },
          },
        ]}
        {...props}
      >
        <ServiceName>엘텍유브이씨, LTechUVC</ServiceName>

        <nav
          css={[
            ViewportTheme({
              width: '100%',
              height: '100%',
              maxWidth: width ? `${width}px` : '100%',
            }),
            FlexTheme({ direction: 'horizontal', align: 'center', crossAlign: 'center' }),
            PaddingTheme({ safeArea: true, padding: { horizontal: 0 } }),
          ]}
        >
          {children}
        </nav>
      </header>
    </Padding>
  );
});

// 서비스명
function ServiceName({ children }: { children: ReactNode }) {
  return (
    <strong
      aria-hidden="true"
      css={{
        width: '0px',
        height: '0px',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        position: 'absolute',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </strong>
  );
}
