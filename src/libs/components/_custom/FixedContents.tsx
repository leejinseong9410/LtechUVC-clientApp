//hooks
import { Column, Img, Row, Spacing, Txt, TxtSpan } from '@/_ui_libs/_index';
import { MQ, colors } from '@/libs/themes/_index';

//
export default function FixedContents({
  img,
  subTitle,
  title,
  context,
  date,
  onClick,
}: {
  img: string;
  subTitle: string;
  title: string;
  context: string;
  date: string;
  onClick?: () => void;
}) {
  return (
    <Row
      onClick={onClick}
      gap={60}
      crossGap={20}
      padding={{ all: 20 }}
      margin={{ top: 30, bottom: 20 }}
      css={{
        cursor: 'pointer',
        '&:hover': { backgroundColor: '#f8f8f8', borderRadius: 16 },
        [MQ[2]]: {
          flexDirection: 'column',
          backgroundColor: '#f8f8f8',
          margin: '30px 0 10px',
        },
      }}
    >
      <Img
        src={img}
        alt={title}
        size={{ maxWidth: 360 }}
        screenRatio={{ x: 4, y: 3 }}
        css={{ [MQ[2]]: { maxWidth: '100%' } }}
      />

      <Column padding={{ top: 20 }}>
        <TxtSpan size={14} color={colors.keyColor}>
          {subTitle}
        </TxtSpan>

        <Spacing size={8} />

        <Txt as="strong" size={18}>
          {title}
        </Txt>

        <Spacing size={10} />

        <TxtSpan size={13} color={colors.grey500}>
          {date}
        </TxtSpan>

        <Spacing size={16} />

        <Txt size={14} color={colors.grey800}>
          {context}
        </Txt>
      </Column>
    </Row>
  );
}
