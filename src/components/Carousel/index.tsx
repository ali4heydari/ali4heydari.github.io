import Head from "next/head";
import Slider from "react-slick";
import React from "react";
import "./slick.css";

interface Props {
  children: React.ReactNode;
}

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel: React.FC<React.PropsWithChildren<Props>> = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <Slider {...settings}>{children}</Slider>
  </>
);

export default Carousel;
