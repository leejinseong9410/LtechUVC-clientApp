import { CSSObject } from '@emotion/react';
import { useRouter } from 'next/router';

//libs
import { BackgroundImgBox, Tab, Txt, Wrap } from '@/_ui_libs/_index';
import { MQ, fontSize } from '@/libs/themes/_index';

export default function Section2({ txt }: { txt: any }) {
  const router = useRouter();

  return (
    <BackgroundImgBox imgSrc={txt?.bannerImg} css={{ flex: 1 }} borderRadius={10}>
      <Wrap
        gap={20}
        align="center"
        padding={{ vertical: 300, horizontal: 20 }}
        backgroundColor="rgba(0,0,0,0.6)"
        borderRadius={10}
        css={{ flex: 1, [MQ[3]]: { padding: '160px 20px' } }}
      >
        <Txt as="h2" size={40} css={Themes('title')} txtAlign="center" data-aos="fade-up">
          {txt?.title}
        </Txt>

        <Txt
          size={18}
          css={Themes('txt')}
          txtAlign="center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {txt?.subTitle}
        </Txt>

        <Tab
          variant="border"
          css={Themes('tab')}
          data-aos="fade-up"
          data-aos-delay="250"
          onClick={() => router.push('/company/vision')}
        >
          {txt?.tabName}
        </Tab>
      </Wrap>
    </BackgroundImgBox>
  );
}

//styled
const Themes = (txt: 'box' | 'title' | 'txt' | 'tab'): CSSObject => {
  if (txt === 'title') return { color: '#fff', [MQ[3]]: { fontSize: fontSize.s30 } };

  if (txt === 'txt')
    return {
      color: '#e2e2e2',
      maxWidth: 1000,
      [MQ[3]]: { fontSize: fontSize.s14, whiteSpace: 'normal' },
    };

  if (txt === 'tab')
    return {
      marginTop: 20,
      color: '#fff',
      borderRadius: 10,
      padding: '14px 30px',
      backgroundColor: 'rgba(255,255,255,0.2)',

      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.3)',
      },
    };

  return {};
};
