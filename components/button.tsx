import React from 'react';
import { Button as NBButton, IButtonProps } from 'native-base';

interface Props {
  text?: string;
  w?: IButtonProps['w'];
  mb?: IButtonProps['mb'];
  isDisabled?: IButtonProps['isDisabled'];
  isLoading?: IButtonProps['isLoading'];
  onPress: IButtonProps['onPress'];
}

const Button = (props: Props) => {
  const { text, w, mb, isDisabled, isLoading, onPress } = props;

  return (
    <NBButton
      colorScheme={'orange'}
      _text={{
        color: 'white',
        fontSize: 'md',
        fontWeight: 'bold',
      }}
      w={w || '50%'}
      mb={mb}
      isDisabled={isDisabled}
      isLoading={isLoading}
      _disabled={{
        bg: 'orange.300',
      }}
      _loading={{
        bg: 'orange.300',
        _text: {
          color: 'white',
        },
      }}
      onPress={onPress}
    >
      {text}
    </NBButton>
  );
};

export { Button };
