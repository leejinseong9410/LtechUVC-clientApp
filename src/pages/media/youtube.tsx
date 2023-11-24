//libs
import { Column, Container, Img, Item, Items, Section, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors, fontSize } from '@/libs/themes/_index';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//components
import SEO from '@/seo.config';
import FixedContents from '@/libs/components/_custom/FixedContents';

//utils
import { moment } from '@/libs/utils/moment';

//
export default function Gallery() {
  const isLang = useRecoilValue(langAtom);
  const txt = isLang?.콘텐츠?.유튜브;

  return (
    <>
      <SEO title={txt?.title} description={txt?.subTitle} />

      <Section>
        <Container
          maxWidth={900}
          padding={{ top: 80, bottom: 100 }}
          css={{ [MQ[3]]: { padding: '40px 0 60px' } }}
        >
          <Column gap={16} padding={{ horizontal: 20 }}>
            <Txt as="h1" size={40} css={{ [MQ[3]]: { fontSize: fontSize.s28 } }}>
              {txt?.title}
            </Txt>

            <Txt
              size={18}
              color={colors.grey700}
              css={{ [MQ[3]]: { fontSize: fontSize.s15, whiteSpace: 'normal' } }}
            >
              {txt?.subTitle}
            </Txt>
          </Column>

          {/* 고정 콘텐츠 */}
          <FixedContents
            onClick={() =>
              window.open(
                'https://www.youtube.com/channel/UCaypchzm47bpQPlY0Cr1wzw?app=desktop',
                '_blank',
              )
            }
            img="https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png"
            title="[Live] Yunchan Lim(임윤찬) Beethoven Piano Concerto"
            subTitle={`🎥 ${txt?.near}`}
            date={moment(new Date())}
            context="Yunchan Lim, Gold medal winner of 2022 Van Cliburn International Piano Competition 
            at the age of 18 which made him the youngest ever winner of the Competition history"
          />

          {/* 리스트 */}
          <Items
            direction="horizontal"
            wrap="wrap"
            gap={30}
            crossGap={40}
            padding={{ top: 50, horizontal: 20 }}
            css={{ [MQ[1]]: { columnGap: 16, rowGap: 24 }, [MQ[3]]: { paddingTop: 30 } }}
          >
            {[
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝asasdsaadsd트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
              { id: 1, img: txt?.bannerImg, title: '프로젝트입니다', date: new Date() },
            ].map((item: any) => (
              <Item
                key={item?.id}
                cursor="pointer"
                onClick={() =>
                  window.open(
                    'https://www.youtube.com/channel/UCaypchzm47bpQPlY0Cr1wzw?app=desktop',
                    '_blank',
                  )
                }
                gap={14}
                css={{
                  flex: '0 0 calc(33.333% - 20px)',
                  [MQ[1]]: { flex: '0 0 calc(50% - 8px)' },
                }}
              >
                <Img
                  src="https://res.cloudinary.com/dp0gh7jel/image/upload/v1700629122/img3_ovxxe9.png"
                  alt={item?.title}
                  screenRatio={{ x: 4, y: 3 }}
                  css={{ '&:hover': { boxShadow: '0 5px 20px rgba(0,0,0,0.22)' } }}
                />

                <Column gap={6}>
                  <Txt
                    as="strong"
                    size={15}
                    ellipsis={{ ellipsis: true, line: 1 }}
                    padding={{ right: 20 }}
                  >
                    {item?.title}
                  </Txt>

                  <Txt
                    size={14}
                    lineHeight={1.4}
                    color={colors.grey700}
                    ellipsis={{ ellipsis: true, line: 2 }}
                  >
                    Yunchan Lim, Gold medal winner of 2022 Van Cliburn International Piano
                    Competition ...
                  </Txt>

                  <TxtSpan size={12} color={colors.grey500} margin={{ top: 4 }}>
                    {moment(item?.date)}
                  </TxtSpan>
                </Column>
              </Item>
            ))}
          </Items>
        </Container>
      </Section>
    </>
  );
}
