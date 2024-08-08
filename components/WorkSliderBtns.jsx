'use client';

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useEffect } from "react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper.isEnd) {
        swiper.slideTo(0); // Go to the first slide
      } else {
        swiper.slideNext(); // Go to the next slide
      }
    }, 5000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [swiper]);

  const handleNextClick = () => {
    if (swiper.isEnd) {
      swiper.slideTo(0); // Go to the first slide
    } else {
      swiper.slideNext(); // Go to the next slide
    }
  };

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={handleNextClick}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}

export default WorkSliderBtns;
