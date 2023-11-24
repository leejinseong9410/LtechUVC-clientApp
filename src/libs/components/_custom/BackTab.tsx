import { useRouter } from 'next/router';

//libs
import { Tab, Wrap } from '@/_ui_libs/_index';

//atoms
import { langTypeAtom } from '@/libs/atoms/widgets-atom';
import { useRecoilValue } from 'recoil';

//
export default function BackTab() {
  const router = useRouter();

  const langType = useRecoilValue(langTypeAtom);

  return (
    <Wrap align="center">
      <Tab
        variant="border"
        padding={{ horizontal: 30, vertical: 12 }}
        colors={{ txt: '#999' }}
        type="button"
        onClick={() => router.back()}
      >
        {langType === 'ko' ? '목록으로' : 'Go to List'}
      </Tab>
    </Wrap>
  );
}
