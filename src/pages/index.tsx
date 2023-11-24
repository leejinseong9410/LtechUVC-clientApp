import React, { ChangeEvent, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

//libs
import {
  Container,
  Img,
  Input,
  Row,
  Section,
  Spacing,
  Txt,
  TxtSpan,
  TxtTab,
} from '@/_ui_libs/_index';
import { MQ, colors } from '@/libs/themes/_index';

//components
import SEO from '@/seo.config';
import Banner from '@/libs/components/home/Banner';
import Section1 from '@/libs/components/home/Section1';
import { DetailModal } from '@/libs/components/_custom/DetailModal';

//atoms
import { useRecoilValue } from 'recoil';
import { langTypeAtom } from '@/libs/atoms/widgets-atom';

//
export default function Index() {
  const router: NextRouter = useRouter();
  const [isPopUp, setIsPopUp] = useState(true);
  const langType = useRecoilValue(langTypeAtom);

  return (
    <>
      <SEO />

      <Section>
        <Banner />

        {/* 사업영역 */}
        <Section1 />

        {/* 마지막 1.5C */}
      </Section>

      {/* 팝업 */}
      <DetailModal
        title="공고 타이틀입니다"
        context={
          <Row gap={8}>
            <Txt size={13} color={colors.grey700}>
              {langType === 'ko' ? '더 자세한 내용이 궁금하다면?' : 'learn more'}
            </Txt>
            <TxtTab size={13} color={colors.grey700} css={{ textDecoration: 'underline' }}>
              {langType === 'ko' ? '더보기' : 'see more'}
            </TxtTab>
          </Row>
        }
        view={isPopUp}
        onCancel={() => setIsPopUp(false)}
      >
        <Img
          src="https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png"
          alt=""
          size={{ height: '100%' }}
          // objectFit="contain"
          screenRatio={{ x: 3, y: 4 }}
          borderRadius="0 0 16px 16px"
        />
      </DetailModal>
    </>
  );
}
