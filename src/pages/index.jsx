import { Flex, Image, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { Divider } from '../components/Divider';
import { Features } from '../components/Features';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <div>
      <Head>
        <title>worldtrip</title>
        <meta name='description' content='viagens' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Header />
      </header>

      <main>
        <Flex w='100%'>
          <Image src='Banner.png' alt='avião' />
        </Flex>

        <Features />

        <Divider />

        <Flex alignItems='center' justifyContent='center' mt='3.25rem'>
          <Text
            color='#47585B'
            fontWeight={500}
            fontSize='36px'
            textAlign='center'
            lineHeight='54px'
          >
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Text>
        </Flex>

        <Slider />
      </main>
    </div>
  );
}
