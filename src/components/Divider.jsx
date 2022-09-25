import { Flex } from '@chakra-ui/react';

export function Divider() {
  return (
    <Flex alignItems='center' justifyContent='center' mt='5rem'>
      <Flex
        w='90px'
        align='center'
        justify='center'
        _before={{
          content: '""',
          borderBottom: '2px solid #47585B',
          flexGrow: 1,
        }}
        _after={{
          content: '""',
          borderBottom: '2px solid #47585B',
          flexGrow: 1,
        }}
      ></Flex>
    </Flex>
  );
}
