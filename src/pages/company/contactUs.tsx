import React, { ChangeEvent, FormEvent, useState } from 'react';

//libs
import {
  Button,
  Column,
  Container,
  Form,
  Img,
  Input,
  LoadingLayer,
  Section,
  Txt,
} from '@/_ui_libs/_index';
import { ContainerTheme, MQ, colors, fontSize } from '@/libs/themes/_index';
import { regEx } from '@/libs/utils/regEx';

//atoms
import { useRecoilValue } from 'recoil';
import { langAtom } from '@/libs/atoms/widgets-atom';

//assets
import contactUsImg from 'public/images/contactUs-img.png';

//conponents
import SEO from '@/seo.config';
import { useMutation } from 'react-query';
import { createContactUs } from '@/_https/post';
import { AlartSnackbar } from '@/libs/components/_custom/Snackbar';

//
export default function contactUs() {
  const lang = useRecoilValue(langAtom);
  const txt = lang.contactUs;

  const fields = { name: '', email: '', title: '', context: '' };
  const [isValues, setIsValues] = useState(fields);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIsValues({ ...isValues, [name]: value });
  };

  const { mutate: onCreate } = useMutation(
    () =>
      createContactUs({
        name: isValues.name,
        email: isValues.email,
        title: isValues.title,
        context: isValues.context,
      }),
    {
      onSuccess: (data: any) => {
        console.log(data);
        setIsLoading(false);
        setIsSuccess(true);
        setIsValues(fields);
      },
    },
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    onCreate();
  };

  return (
    <>
      {isLoading && <LoadingLayer />}
      <AlartSnackbar view={isSuccess} onCancel={() => setIsSuccess(false)} />

      <SEO title={txt?.title} />

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

          <Form gap={20} onSubmit={onSubmit}>
            {/* 이름 */}
            <Input label={txt?.label1} labelEdge="*">
              <Input.TextField
                shape="box"
                name="name"
                value={isValues.name}
                placeholder={txt?.label1_placeholder}
                onChange={handleOnChange}
              />
            </Input>

            {/* 이메일 */}
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

            {/* 제목 */}
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

            {/* 내용 */}
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
