import { Flex, Text, Image, Box, Container, Stack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Slider() {
  const cards = [
    {
      title: 'Africa',
      text: 'O continente mais quente do mundo',
      image: 'Africa.jpg',
    },
    {
      title: 'America',
      text: 'O Continente mais diverso do mundo',
      image: 'America.jpg',
    },
    {
      title: 'Asia',
      text: 'O continente mais populoso do mundo',
      image: 'Asia.jpg',
    },
    {
      title: 'Europa',
      text: 'O continente mais antigo do mundo',
      image: 'Europa.jpg',
    },
    {
      title: 'Oceania',
      text: 'O continente mais isolado do mundo',
      image: 'Oceania.jpg',
    },
  ];

  return (
    <Box position='relative' height='450px' width='1240px' overflow='hidden'>
      <Swiper
        cssMode
        navigation
        pagination
        mousewheel
        keyboard
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Box
              key={index}
              height='6xl'
              position='relative'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              backgroundImage={`url(${card.image})`}
            >
              <Container
                size='container.lg'
                height='450px'
                position='relative'
              >
                <Stack></Stack>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
