import { JSX, mergeProps, Show } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';

export type BuzzsproutProperties = {
  /* Buzzsprout id: podcastId/episodeId`*/
  buzzsproutId: string;
  /* width of the iframe: default to 100% */
  width?: string;
  /* height of the iframe: default to 200px */
  height?: string;
};

export const Buzzsprout = (properties: BuzzsproutProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      width: '100%',
      height: '200',
    },
    properties
  );
  const regex = /^\d{7}\/\d{7}-[\W\w]+/;
  return (
    <Show when={regex.test(properties_.buzzsproutId)}>
      <GeneralObserver>
        <div style={{ position: 'relative' }}>
          <iframe
            {...createTestId('buzzsprout')}
            class="buzzsprout-solid-social"
            title={`buzzsprout-${properties_.buzzsproutId}`}
            src={`https://www.buzzsprout.com/${properties_.buzzsproutId}?client_source=small_player&amp;iframe=true`}
            width={properties_.width}
            height={properties_.height}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            scrolling="no"
          />
        </div>
      </GeneralObserver>
    </Show>
  );
};