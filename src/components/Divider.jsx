import { Divider as DividerComponents, Stack } from '@chakra-ui/react';

export function Divider() {
  return (
    <Stack
      width='100px'
      mt={20}
    >
      <DividerComponents
        orientation='horizontal'
        display='flex'
        alignContent='center'
        justifyContent='center'
      />
    </Stack>
  );
}
