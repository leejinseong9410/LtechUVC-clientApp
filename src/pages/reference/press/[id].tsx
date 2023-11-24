import React from 'react';

//libs
import { Column, Container, Img, Row, Section, Spacing, Txt, TxtSpan } from '@/_ui_libs/_index';
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
        <Txt as="h1" size={26}>
          프로젝트 타이틀 프로젝트 타이틀 프로젝트 타이틀 프로젝트 타이틀 프로젝트 타이틀 프로젝트
          타이틀
        </Txt>

        <Txt padding={{ top: 20, bottom: 24 }} color={colors.grey800}>
          국가는 청원에 대하여 심사할 의무를 진다. 국민의 모든 자유와 권리는 국가안전보장·질서유지
          또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도
          자유와 권리의 본질적인 내용을 침해할 수 없다. 대통령은 국무회의의 의장이 되고, 국무총리는
          부의장이 된다. 헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여 국회의원선거권자
          과반수의 투표와 투표자 과반수의 찬성을 얻어야 한다.
        </Txt>

        <Row gap={6}>
          <TimeIcon width={15} />
          <TxtSpan margin={{ bottom: 2 }} size={13}>
            {moment(new Date())}
          </TxtSpan>
        </Row>

        <Spacing size={40} />

        <Column gap={10}>
          <Img
            src="https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png"
            alt=""
          />
          <Img
            src="https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png"
            alt=""
          />
        </Column>

        <Spacing size={40} />
        <BackTab />
      </Container>
    </Section>
  );
}
