import React, { useState } from 'react';

//libs
import { BackgroundImgBox, Img, Row, Section, Txt, Wrap } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { langAtom } from '@/libs/atoms/widgets-atom';
import { useRecoilValue } from 'recoil';

//components
import SEO from '@/seo.config';

//
export default function Vision() {
  const lang = useRecoilValue(langAtom);
  const txt = lang?.비전;
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const hoverHandler = (i: number) => {
    if (i == 0) {
      setHover1(true);
      setHover2(false);
      setHover3(false);
    }
    if (i == 1) {
      setHover1(false);
      setHover2(true);
      setHover3(false);
    }
    if (i == 2) {
      setHover1(false);
      setHover2(false);
      setHover3(true);
    }
  };

  return (
    <>
      <SEO title={txt?.title} />
      <Section>
        <BackgroundImgBox
          imgSrc={
            (hover1 && txt?.bgImg1) ||
            (hover2 && txt?.bgImg2) ||
            (hover3 && txt?.bgImg3) ||
            txt?.bgImg1
          }
          css={{ flex: 1 }}
        >
          <Wrap
            align="center"
            padding={{ vertical: 120, horizontal: 20 }}
            backgroundColor="rgba(0,0,0,0.6)"
            css={{ flex: 1, [MQ[3]]: { padding: '60px 20px' } }}
          >
            <Txt
              as="h1"
              txtAlign="center"
              size={38}
              color={colors.white}
              css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}
            >
              {txt?.title}
            </Txt>

            <Txt
              maxWidth={768}
              size={15}
              color={colors.grey200}
              txtAlign="center"
              padding={{ top: 30, bottom: 60 }}
              css={{
                [MQ[3]]: { fontSize: fontSize.s14, whiteSpace: 'normal', padding: '20px 0 50px' },
              }}
            >
              {txt?.text}
            </Txt>

            {/* --- 각 요소 --- */}
            <Row
              align="start"
              crossAlign="space-between"
              gap={40}
              crossGap={40}
              maxWidth={768}
              css={{ [MQ[2]]: { flexDirection: 'column' } }}
            >
              {txt?.content?.map((item: { txt: string; img: string }, i: number) => (
                <Wrap
                  css={{ cursor: 'pointer' }}
                  key={i}
                  gap={12}
                  align="center"
                  onMouseEnter={() => hoverHandler(i)}
                  onClick={() => hoverHandler(i)}
                >
                  <Img
                    src={item?.img}
                    alt={lang.content1}
                    size={{ maxWidth: 180, minWidth: 180, height: '100%', minHeight: 180 }}
                  />
                  <Txt maxWidth={200} txtAlign="center" color={colors.grey200}>
                    {item?.txt}
                  </Txt>
                </Wrap>
              ))}
            </Row>
          </Wrap>
        </BackgroundImgBox>
      </Section>
    </>
  );
}
