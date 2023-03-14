import style from './rates-section.module.css';
import Button from '../button/button';
import img1 from '../../images/rates1.jpg';
import img2 from '../../images/rates2.jpg';

function RatesSection() {
  return (
    <section className={style.section}>
      <h2 className={style.title}>тарифы</h2>
      <p className={style.text}>
        Вы получите качественные, красивые снимки, независимо от тарифа. Для
        первой съемки рекомендую выбрать тариф VIP: у нас будет возможность
        пообщаться, познакомиться и лучше понять друг друга во время часа
        красоты. Одна из важнейших деталей успешной съемки - контакт между
        фотографом и моделью!
      </p>
      <div className={style.cont}>
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <Card1 />
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <Card2 />
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <Card1 />
      </div>
    </section>
  );
}

export default RatesSection;

function Card1() {
  const click = () => console.log('click');

  return (
    <div className={style.card}>
      <img className={style.img} src={img1} alt="lite" />
      <h2 className={style.card_title}>lite</h2>
      <div className={style.cont_text}>
        <div className={style.cont_text_float}>
          <div className={style.cont_text_left}>
            <p className={style.card_text_left}>Время съемки</p>
            <p className={style.card_text_left}>Аренда студии</p>
            <p className={style.card_text_left}>Количество снимков</p>
            <p className={style.card_text_left}>Макияж</p>
            <p className={style.card_text_left}>Прическа</p>
          </div>
          <div className={style.cont_text_right}>
            <p className={style.card_text_right}>1 час</p>
            <p className={style.card_text_right}>1 час</p>
            <p className={style.card_text_right}>100</p>
            <p className={style.card_text_right}>+4000 руб.</p>
            <p className={style.card_text_right}>+4000 руб.</p>
          </div>
        </div>
        <p className={style.card_text}>
          Макияж и прическа - дополнительные услуги и включаются в тариф по
          желанию.
        </p>
      </div>
      <h2 className={style.card_title}>10 000 руб.</h2>
      <div className={style.cont_button}>
        <Button onClick={click} />
      </div>
    </div>
  );
}

function Card2() {
  const click = () => console.log('click');

  return (
    <div className={style.card}>
      <img className={style.img} src={img2} alt="standart" />
      <h2 className={style.card_title}>standart</h2>
      <div className={style.cont_text}>
        <div className={style.cont_text_float}>
          <div className={style.cont_text_left}>
            <p className={style.card_text_left}>Время съемки</p>
            <p className={style.card_text_left}>Аренда студии</p>
            <p className={style.card_text_left}>Количество снимков</p>
            <p className={style.card_text_left}>Макияж</p>
            <p className={style.card_text_left}>Прическа</p>
          </div>
          <div className={style.cont_text_right}>
            <p className={style.card_text_right}>2 час</p>
            <p className={style.card_text_right}>2 час</p>
            <p className={style.card_text_right}>300</p>
            <p className={style.card_text_right}>+4000 руб.</p>
            <p className={style.card_text_right}>+4000 руб.</p>
          </div>
        </div>
        <p className={style.card_text}>
          Макияж и прическа - дополнительные услуги и включаются в тариф по
          желанию.
        </p>
      </div>
      <h2 className={style.card_title}>18 000 руб.</h2>
      <div className={style.cont_button}>
        <Button onClick={click} />
      </div>
    </div>
  );
}
