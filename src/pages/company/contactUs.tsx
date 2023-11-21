import React, { ChangeEvent, useState } from 'react';

//libs
import { Button, Column, Container, Form, Img, Input, Section, Txt } from '@/_ui_libs/_index';
import { ContainerTheme, MQ, colors, fontSize } from '@/libs/themes/_index';
import { regEx } from '@/libs/utils/regEx';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//assets
import contactUsImg from 'public/images/contactUs-img.png';

//conponents
import SEO from '@/seo.config';

//
export default function contactUs() {
  const lang = useRecoilValue(langAtom);
  const txt = lang.contactUs;
  const [isValues, setIsValues] = useState({ name: '', email: '', title: '', context: '' });
  const isLoading = true;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIsValues({ ...isValues, [name]: value });
  };

  // if (isLoading) return <LoadingLayer />;

  return (
    <>
      <SEO title="문의하기" description="문의하기" />
      <Section>
        <Container maxWidth={560} padding={{ horizontal: 20 }} css={ContainerTheme()}>
          <Img src={contactUsImg} alt="contactUs" />

          <Column margin={{ top: 40, bottom: 30 }} gap={16} css={{ [MQ[3]]: { marginTop: 30 } }}>
            <Txt as="h1" size={28} css={{ [MQ[3]]: { fontSize: fontSize.s24 } }}>
              {txt?.title}
            </Txt>

            <Txt size={14} color={colors.grey700}>
              {txt?.subTitle}
            </Txt>
          </Column>

          <Form gap={20}>
            <Input label={txt?.label1} labelEdge="*">
              <Input.TextField
                shape="box"
                name="name"
                value={isValues.name}
                placeholder={txt?.label1_placeholder}
                onChange={handleOnChange}
              />
            </Input>

            <Input label={txt?.label2} labelEdge="*">
              <Input.TextField
                shape="box"
                name="email"
                value={isValues.email}
                placeholder={txt?.label2_placeholder}
                onChange={handleOnChange}
                error={!!isValues.email && !regEx.email.test(isValues.email)}
                errorMsg={txt?.errMsg}
              />
            </Input>

            <Input label={txt?.label3} labelEdge="*">
              <Input.TextField
                shape="box"
                maxLength={30}
                name="title"
                value={isValues.title}
                placeholder={txt?.label3_placeholder}
                onChange={handleOnChange}
              />
            </Input>

            <Input label={txt?.label4} labelEdge="*">
              <Input.Textarea
                shape="box"
                rows={8}
                name="context"
                value={isValues.context}
                placeholder={txt?.label4_placeholder}
                onChange={(e) => setIsValues({ ...isValues, context: e.target.value })}
              />
            </Input>

            <Button
              margin={{ top: 10 }}
              type="submit"
              disabled={
                (isValues.name && isValues.email && isValues.title && isValues.context) === '' ||
                !regEx.email.test(isValues.email)
              }
            >
              {txt?.tabName}
            </Button>
          </Form>
        </Container>
      </Section>
    </>
  );
}
