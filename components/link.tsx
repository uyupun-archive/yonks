import React from 'react';
import { Button as NBButton, IButtonProps, Link as NBLink, ILinkProps } from 'native-base';

interface Props {
  text?: string;
  mb?: IButtonProps['mb'];
  href?: ILinkProps['href'];
  onPress?: IButtonProps['onPress'];
}

const Link = (props: Props) => {
  const { text, mb, href, onPress } = props;

  if (href) {
    return (
      <NBLink
        href={href}
        mb={mb}
        _text={{
          color: 'blue.500',
          fontSize: 'md',
          fontWeight: 'normal',
          underline: true,
        }}
      >
        {text}
      </NBLink>
    );
  }

  return (
    <NBButton
      variant={'link'}
      colorScheme={'blue'}
      _text={{
        fontSize: 'md',
        fontWeight: 'normal',
        underline: true,
      }}
      mb={mb}
      onPress={onPress}
    >
      {text}
    </NBButton>
  );
};

export { Link };
