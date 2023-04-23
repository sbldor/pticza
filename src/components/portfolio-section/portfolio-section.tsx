import { useEffect, useState } from 'react';
import style from './portfolio-section.module.css';
import img1 from '../../images/portfolio1.jpg';
import img2 from '../../images/portfolio2.jpg';
import img3 from '../../images/portfolio3.jpg';
import img4 from '../../images/portfolio4.jpg';
import img5 from '../../images/portfolio5.jpg';
import img6 from '../../images/portfolio6.jpg';
import img1S from '../../images/portfolio1-s.jpg';
import img2S from '../../images/portfolio2-s.jpg';
import img3S from '../../images/portfolio3-s.jpg';
import img4S from '../../images/portfolio4-s.jpg';
import img5S from '../../images/portfolio5-s.jpg';
import img6S from '../../images/portfolio6-s.jpg';

function PortfolioSection() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const images = (win: number, img: string, imgS: string) => {
    if (win > 1000) {
      return img;
    }
    return imgS;
  };

  return (
    <section className={style.section}>
      <h2 className={style.title}>потфолио</h2>
      <div className={style.cont}>
        <div className={style.card}>
          <img
            className={style.img}
            src={images(width, img1, img1S)}
            alt="Женский портрет"
          />
          <p className={style.text}>Женский портрет</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={images(width, img2, img2S)}
            alt="Мужской портрет"
          />
          <p className={style.text}>Мужской портрет</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={images(width, img3, img3S)}
            alt="Модельные тесты, минимализм"
          />
          <p className={style.text}>Модельные тесты, минимализм</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={images(width, img4, img4S)}
            alt="Будуар/НЮ"
          />
          <p className={style.text}>Будуар/НЮ</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={images(width, img5, img5S)}
            alt="Предметная съемка"
          />
          <p className={style.text}>Предметная съемка</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={images(width, img6, img6S)}
            alt="Верстка и коллажи"
          />
          <p className={style.text}>Верстка и коллажи</p>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
