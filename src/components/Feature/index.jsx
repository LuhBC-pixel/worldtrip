import { Flex, Stack, Text } from '@chakra-ui/react';

export function Feature({ title, icon }) {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      direction='column'
      as='div'
    >
      <Flex>{icon}</Flex>
      <Text color='gray' fontWeight={600}>
        {title}
      </Text>
    </Stack>
  );
}
