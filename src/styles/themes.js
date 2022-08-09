import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: {
      50: '#F5F8FA',
      100: '#F5F8FA',
      200: '#DADADA',
    },
    gray: '#47585B',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.50',
      },
    },
  },
});
