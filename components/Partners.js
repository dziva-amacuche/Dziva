import React from "react";
import Image from 'next/image';
import styled from "styled-components";
import dell from "../assets/Partners-logo/dell.png";
import engage from "../assets/Partners-logo/engage.png";
import hp from "../assets/Partners-logo/hp.png";
import kaspersky from "../assets/Partners-logo/kaspersky.png";
import lenovoIsp from "../assets/Partners-logo/lenovo-isp.png";
import lenovoPP from "../assets/Partners-logo/lenovo-pp.png";
import phc from "../assets/Partners-logo/phc.png";
import sophos from "../assets/Partners-logo/sophos.png";
import VVAR from "../assets/Partners-logo/VVAR.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        filter: "invert()",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        filter: "invert()",
      }}
      onClick={onClick}
    />
  );
}

function Partners() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <Parcerias>
      <div className="parcerias-container">
        <h1>Os nossos parceiros</h1>
        <Slider {...settings} className="slider">
          <div className="partner">
            <Image  className="img"src={dell}></Image>
          </div>
          <div className="partner">
            <Image  className="img"src={engage}></Image>
          </div>
          <div className="partner">
            <Image className="img" src={hp}></Image>
          </div>
          <div className="partner">
            <Image  className="img"src={kaspersky}></Image>
          </div>
          <div className="partner">
            <Image  className="img"src={lenovoIsp}></Image>
          </div>
          <div className="partner">
            {" "}
            <Image  className="img"src={lenovoPP}></Image>
          </div>
          <div className="partner">
            <Image className="img" src={phc}></Image>
          </div>
          <div className="partner">
            {" "}
            <Image className="img" src={sophos}></Image>
          </div>
          <div className="partner">
            {" "}
            <Image className="img" src={VVAR}></Image>
          </div>
        </Slider>
      </div>
    </Parcerias>
  );
}

const Parcerias = styled.div`
  width: 100%;
  text-align: center;
  min-height: 55vh;
  background-color: none;

  //RESPONSIVENESS FOR MOBILE
  @media only screen and (max-width: 768px) {
    min-height: 40vh !important;
    height: 20vh;
    width: 100%;

    .slider {
      height: 20vh !important;
    }
    .parcerias-container {
      display: flex;
      flex-direction: column !important;
      min-height: 100vh;
      margin: 0 1rem !important;

      .partner {
        margin: 2rem 6rem !important;
        .img {
          width: 20rem !important;
        }
      }
    }
  }

  .slider {
    height: 25vh;
    margin: 0rem 2rem;
    display: flex;
  }

  .parcerias-container {
    height: 100%;
    margin: 4rem 4rem 0 4rem;
    display: flex;
    flex-direction: column !important;

    h1 {
      margin: 2rem 0 1rem 0;
    }

    .partner {
      width: 20%;
      height: 15vh;
      margin: 0rem 3rem;
      .img {
        width: 6rem !important;
        height: 8rem !important;
        aspect-ratio: 3/2;
        object-fit: contain;
        cursor: pointer;
        /* filter: grayscale(100%) contrast(80%);
          transition: transform 0.25s ease-in-out;

          :hover {
            filter: grayscale(0);
            transform: scale(1.2);
          } */
      }
    }
  }
`;

export default Partners;
