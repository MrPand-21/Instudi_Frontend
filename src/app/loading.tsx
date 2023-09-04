import {NextPage} from 'next';
import {JellyTriangle} from '@uiball/loaders';

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <JellyTriangle size={150} speed={1.75} color='white' />
    </div>
  );
};

export default Loading;
