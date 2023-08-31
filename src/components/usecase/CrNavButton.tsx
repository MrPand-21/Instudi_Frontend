'use client';
import {NextPage} from 'next';
import {useRouter} from 'next/navigation';
import CrButton, {CrButtonProps} from '../CrButton';

interface Props extends CrButtonProps {
  url: string;
}

const CrNavButton: NextPage<Props> = ({url, ...rest}) => {
  const router = useRouter();

  function handleNavLogin() {
    router.push(url);
  }
  return <CrButton {...rest} onClick={() => handleNavLogin()} />;
};

export default CrNavButton;
