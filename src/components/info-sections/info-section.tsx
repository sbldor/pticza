import { useState, useEffect } from 'react';
import style from './info-section.module.css';
// import imgBig from '../../images/app-big.jpg';
import app1 from '../../images/app1.jpg';
import app2 from '../../images/app2.jpg';
import app3 from '../../images/app3.jpg';
import app4 from '../../images/app4.jpg';
import app5 from '../../images/app5.jpg';
import app5Big from '../../images/app5-big.jpg';

function InfoSection() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <section className={style.section}>
      {width > 1000 && (
        <div className={style.cont_imgs}>
          <img className={style.img_small} src={app1} alt="" />
          <img className={style.img_small} src={app2} alt="" />
          <img className={style.img_small} src={app3} alt="" />
          <img className={style.img_small} src={app4} alt="" />
          <img className={style.img_small} src={app5} alt="" />
        </div>
      )}
      <div className={style.text}>
        {width > 1000 && <h1 className={style.title}>SOPHIA PTITSA</h1>}
        <p className={style.subtitle}>
          Меня зовут София Птица. С весны 2020 года и по настоящее время я
          занимаюсь частными и коммерческими съёмками.
        </p>
        {width > 1000 ? (
          <p className={style.subtitle}>
            Сложные световые схемы и цветной свет для меня не проблема: они
            делают снимки более интересными и красочными. У меня есть навык
            съёмки как на улице, так и в студии. Я обожаю фото-искусство и
            развиваюсь во всех его жанрах.
          </p>
        ) : (
          <p className={style.subtitle}>
            Сложные световые схемы и цветной свет для меня не проблема: они
            делают снимки более интересными и красочными. У меня есть навык
            съёмки как на улице, так и в студии.
          </p>
        )}
        {width < 1001 && (
          <>
            <img
              // style={{ marginTop: 20 }}
              className={style.img_small}
              src={app5Big}
              alt=""
            />
            <p className={style.subtitle}>
              Я обожаю фото-искусство и развиваюсь во всех его жанрах.
            </p>
          </>
        )}
        <ul style={{ paddingLeft: 20 }}>
          <li className={style.li}>
            <p className={style.subtitle}>
              Для вас: портретная, свадебная и love story, семейная,
              тематическая, будуар и ню съёмка.
            </p>
          </li>

          <li className={style.li}>
            <p className={style.subtitle}>
              Для вашего бизнеса: бизнес-портреты, актерское и модельное
              портфолио, репортажи, food, контентная, интерьерная и экстерьерная
              съемка.
            </p>
          </li>

          <li className={style.li}>
            <p className={style.subtitle}>
              Для вашей рекламы: beauty, показы мод, still life, каталог,
              lookbook, campaigh, editorial, предметная съёмка.{' '}
            </p>
          </li>
        </ul>
        <p className={style.subtitle}>
          Также я продюсирую и снимаю творческие арт-съёмки.
        </p>
      </div>
      <div className={style.cont_img} />
    </section>
  );
}

export default InfoSection;
