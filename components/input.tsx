import React from 'react';
import { Box, IBoxProps, Text, Input as NBInput, IInputProps } from 'native-base';

interface Props {
  text?: string;
  type?: IInputProps['type'];
  size?: IInputProps['size'];
  placeholder?: IInputProps['placeholder'];
  value?: IInputProps['value'];
  onChangeText?: IInputProps['onChangeText'];
  mb?: IBoxProps['mb'];
}

const Input = (props: Props) => {
  const { text, type, size, placeholder, value, onChangeText, mb } = props;

  if (text) {
    return (
      <Box mb={mb}>
        <Text fontSize={'md'} mb={1}>
          {text}
        </Text>
        <NBInput
          type={type}
          h={'40px'}
          placeholder={placeholder}
          _focus={{
            borderColor: 'orange.500',
          }}
          value={value}
          onChangeText={onChangeText}
        />
      </Box>
    );
  } else {
    return (
      <NBInput
        type={type}
        size={size || 'lg'}
        placeholder={placeholder}
        _focus={{
          borderColor: 'orange.500',
        }}
        value={value}
        onChangeText={onChangeText}
      />
    );
  }
};

export { Input };
