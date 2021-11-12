import React from 'react';
import { Center, Heading } from 'native-base';

interface Props {
  text?: string;
}

const Header = (props: Props) => {
  const { text } = props;

  return (
    <Center borderColor='gray.300' borderBottomWidth={1} pt={1} pb={2}>
      <Heading size='sm'>{text}</Heading>
    </Center>
  );
};

export { Header };
