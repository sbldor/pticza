import style from './rates-section.module.css';
import Button from '../button/button';
import img1 from '../../images/rates1.jpg';
import img2 from '../../images/rates2.jpg';
import img3 from '../../images/rates3.jpg';

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
        <CardLite />
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <CardStandart />
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <CardVip />
      </div>
    </section>
  );
}

export default RatesSection;

function CardLite() {
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
        <Button type="button" onClick={click} />
      </div>
    </div>
  );
}

function CardStandart() {
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
        <Button type="button" onClick={click} />
      </div>
    </div>
  );
}

function CardVip() {
  const click = () => console.log('click');

  return (
    <div className={style.card}>
      <img className={style.img} src={img3} alt="standart" />
      <div className={style.vip}>
        <p className={style.vip_text}>хит</p>
      </div>
      <h2 className={style.card_title_vip}>vip</h2>
      <div className={style.cont_text}>
        <div className={style.cont_text_float}>
          <div className={style.cont_text_left}>
            <p className={style.card_text_left}>Время съемки</p>
            <p className={style.card_text_left}>Аренда студии</p>
            <p className={style.card_text_left}>Количество снимков</p>
          </div>
          <div className={style.cont_text_right}>
            <p className={style.card_text_right}>2 час</p>
            <p className={style.card_text_right}>2 час</p>
            <p className={style.card_text_right}>300</p>
          </div>
        </div>
        <p className={style.card_text}>
          Макияж и прическа в 4 руки входят в стоимость.
        </p>
        <p className={style.card_text}>
          Все фото в ретуши через 36 часов после съемки. Исходники - в день
          съемки.
        </p>
      </div>
      <h2 className={style.card_title}>22 000 руб.</h2>
      <div className={style.cont_button}>
        <Button type="button" styles="vip" onClick={click} />
      </div>
    </div>
  );
}
