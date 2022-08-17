import { Flex, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { Divider } from '../components/Divider';
import { Features } from '../components/Features';
import { Header } from '../components/Header';

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
      </main>
    </div>
  );
}
