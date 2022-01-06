import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTwttrLoad } from 'components/twitter/utilities';
import { createTestId } from 'utilities';

export type TwitterHashtagButtonProperties = {
  /** Twitter hashtag */
  hashtag: string;
  /** The size of the button */
  size?: 'large' | 'small';
};

export const TwitterHashtagButton = (properties: TwitterHashtagButtonProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      size: 'small',
    },
    properties
  );
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <a
        {...createTestId('twitter-hashtag-button')}
        href={`https://twitter.com/intent/tweet?button_hashtag=${properties_.hashtag}&ref_src=twsrc%5Etfw`}
        class="twitter-hashtag-button-solid-social"
        data-size={properties_.size}
      >{`Tweet #${properties_.hashtag}`}</a>
    </GeneralObserver>
  );
};
