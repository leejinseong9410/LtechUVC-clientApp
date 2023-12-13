//libs
import { Column, Img, Padding, Section, Txt } from '@/_ui_libs/_index';
import { MQ, colors } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';
import ContentView from '@/libs/components/_custom/ContentView';
import BannerTitle from '@/libs/components/_custom/BannerTitle';

//
export default function SmartEnergy() {
  const lang = useRecoilValue(langAtom);
  const txt = lang?.스마트에너지;

  return (
    <>
      <SEO title={txt?.banner?.title} description={txt?.banner?.subTitle} />
      <Section>
        <BannerTitle
          txtColor="black"
          image={txt?.banner?.bannerImg}
          title={txt?.banner?.title}
          subTitle={txt?.banner?.subTitle}
        />

        {/* --- 타이틀 --- */}
        <ContentView
          title={txt?.title}
          subTitle={txt?.text}
          maxWidth={1240}
          padding={{ horizontal: 20 }}
        >
          {/* 연료 전지 */}
          <Column gap={30} data-aos="zoom" data-aos-delay="100" margin={{ top: 140}} css={{ [MQ[3]]: { marginTop: 80 } }}>
              <Img
                src={txt?.content1?.img}
                alt={txt?.title}
                size={{ maxHeight: 620 }}
                objectFit="cover"
              />
            <Column gap={16}>
              <Txt as="strong" color={colors.keyColor}>
                {txt?.content1?.title}
              </Txt>
              <Txt color={colors.grey700}>{txt?.content1?.text}</Txt>
            </Column>
          </Column>

          {/* 화성 스마트 에너지 사업 */}
          <Column
            gap={30}
            margin={{ top: 140 }}
            css={{ [MQ[3]]: { marginTop: 80 } }}
            data-aos="zoom"
            data-aos-delay="100"
          >
            <Img
              src={txt?.content2.img}
              alt={txt?.content2.img}
              size={{ maxHeight: 620 }}
              objectFit="cover"
            />

            <Column gap={16}>
              <Txt as="strong" color={colors.keyColor}>
                {txt?.content2?.title}
              </Txt>

              <Txt color={colors.grey700} maxWidth={520}>
                {txt?.content2?.text}
              </Txt>
            </Column>
          </Column>

          {/* 사업 */}
          <Column
            gap={30}
            margin={{ top: 140 }}
            css={{ [MQ[3]]: { marginTop: 80 } }}
            data-aos="zoom"
            data-aos-delay="100"
          >
            <Img
              src={txt?.content3.img}
              alt={txt?.content3.img}
              size={{ maxHeight: 620 }}
              objectFit="cover"
            />

            <Column gap={16}>
              <Txt as="strong" color={colors.keyColor}>
                {txt?.content3?.title}
              </Txt>

              <Txt color={colors.grey700} maxWidth={520}>
                {txt?.content3?.text}
              </Txt>
            </Column>
          </Column>
        </ContentView>
      </Section>
    </>
  );
}
