import React, { ChangeEvent, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

//libs
import { Container, Input, Section, Spacing } from '@/_ui_libs/_index';
import { MQ } from '@/libs/themes/_index';

//components
import SEO from '@/seo.config';
import Banner from '@/libs/components/home/Banner';
import Section1 from '@/libs/components/home/Section1';

//
export default function Index() {
  const router: NextRouter = useRouter();

  return (
    <>
      <SEO />

      <Section>
        <Banner />
        <Section1 />
      </Section>
    </>
  );
}
