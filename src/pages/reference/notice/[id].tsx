import React from 'react';

//libs
import { Container, Img, Row, Section, Spacing, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors } from '@/libs/themes/_index';

//assets
import { TimeIcon } from '@/libs/assets/icons';

//utils
import { moment } from '@/libs/utils/moment';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';
import BackTab from '@/libs/components/_custom/BackTab';

//
export default function Detail() {
  const isLang = useRecoilValue(langAtom);
  const txt = isLang?.콘텐츠?.프로젝트?.banner;

  return (
    <Section>
      <Container
        maxWidth={800}
        padding={{ top: 80, bottom: 100, horizontal: 20 }}
        css={{ [MQ[3]]: { padding: '40px 20px 60px' } }}
      >
        <Row gap={6} margin={{ bottom: 14 }}>
          <TimeIcon width={15} />
          <TxtSpan margin={{ bottom: 2 }} size={13}>
            {moment(new Date())}
          </TxtSpan>
        </Row>

        <Txt as="h1" size={26}>
          프로젝트 타이틀 프로젝트 타이틀 프로젝트 타이틀
        </Txt>

        <Spacing size={40} />

        <Img
          src="https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png"
          alt=""
          // objectFit="contain"
          screenRatio={{ x: 3, y: 4 }}
        />

        <Spacing size={40} />
        <BackTab />
      </Container>
    </Section>
  );
}