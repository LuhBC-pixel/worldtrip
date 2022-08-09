import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      mb='4'
      px='6'
      align='center'
      justifyContent='center'
    >
      <Image src='Logo.svg' alt='Logo do worldtrip' />
    </Flex>
  );
}
