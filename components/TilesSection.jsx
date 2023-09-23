import { HERO_IMAGES } from "@/data/heroImages.data";

export const TilesSection = () => {
  const {images1, images2, images3, images4} = HERO_IMAGES;


  return (
    <section className='tiles tiles--perspective tiles--darker'>
      <div className='tiles__wrap'>
        <div
          className='tiles__line'
          data-scroll
          data-scroll-speed='2'
          data-scroll-direction='horizontal'
        >
          {images1.map((img, index) => (
            <div
              key={index}
              className='tiles__line-img'
              style={{ backgroundImage: `url(/img/demo4/${img})` }}
            ></div>
          ))}
        </div>
        <div
          className='tiles__line'
          data-scroll
          data-scroll-speed='-2'
          data-scroll-direction='horizontal'
        >
          {images2.map((img, index) => (
            <div
              key={index}
              className='tiles__line-img'
              style={{ backgroundImage: `url(img/demo4/${img})` }}
            ></div>
          ))}
        </div>
        <div
          className='tiles__line'
          data-scroll
          data-scroll-speed='2'
          data-scroll-direction='horizontal'
        >
          {images3.map((img, index) => (
            <div
              key={index}
              className='tiles__line-img'
              style={{ backgroundImage: `url(/img/demo4/${img})` }}
            ></div>
          ))}
        </div>
        <div
          className='tiles__line'
          data-scroll
          data-scroll-speed='-2'
          data-scroll-direction='horizontal'
        >
          {images4.map((img, index) => (
            <div
              key={index}
              className='tiles__line-img'
              style={{ backgroundImage: `url(img/demo4/${img})` }}
            ></div>
          ))}
        </div>
      </div>
      <h2
        className='tiles__title tiles__title--intro'
        data-scroll
        data-scroll-speed='4'
      >
        Squirmy
        <br />
        Meshes
      </h2>
    </section>
  );
};
