import { Box, SimpleGrid } from '@chakra-ui/react';
import { Feature } from './Feature';

import Cocktail from '../../public/cocktail.svg';
import Surf from '../../public/surf.svg';
import Building from '../../public/building.svg';
import Museum from '../../public/museum.svg';
import Earth from '../../public/earth.svg';

export function Features() {
  return (
    <Box pt={10} width='100%' display='flex' alignItems='center' justifyContent='center'>
      <SimpleGrid columns={5} spacing={28}>
        <Feature icon={<Cocktail />} title='vida noturna' />
        <Feature icon={<Surf />} title='praia' />
        <Feature icon={<Building />} title='moderno' />
        <Feature icon={<Museum />} title='clássico' />
        <Feature icon={<Earth />} title='e mais...' />
      </SimpleGrid>
    </Box>
  );
}
