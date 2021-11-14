import React from 'react';
import { Badge as NBBadge, IBadgeProps } from 'native-base';

interface Props {
  status?: 'busy' | 'either' | 'lonely';
}

const Badge = (props: Props) => {
  const { status } = props;
  let text: 'いそがしい' | 'どちらでも' | '人肌恋しい' = 'いそがしい';
  let colorScheme: IBadgeProps['colorScheme'] = 'red';

  if (status === 'either') {
    text = 'どちらでも';
    colorScheme = 'green';
  } else if (status === 'lonely') {
    text = '人肌恋しい';
    colorScheme = 'lightBlue';
  }

  return <NBBadge colorScheme={colorScheme}>{text}</NBBadge>;
};

export { Badge };
