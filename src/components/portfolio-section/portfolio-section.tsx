import style from './portfolio-section.module.css';
import img1 from '../../images/portfolio1.jpg';
import img2 from '../../images/portfolio2.jpg';
import img3 from '../../images/portfolio3.jpg';
import img4 from '../../images/portfolio4.jpg';
import img5 from '../../images/portfolio5.jpg';
import img6 from '../../images/portfolio6.jpg';

function PortfolioSection() {
  return (
    <section className={style.section}>
      <h2 className={style.title}>потфолио</h2>
      <div className={style.cont}>
        <div className={style.card}>
          <img className={style.img} src={img1} alt="Женский портрет" />
          <p className={style.text}>Женский портрет</p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={img2} alt="Мужской портрет" />
          <p className={style.text}>Мужской портрет</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={img3}
            alt="Модельные тесты, минимализм"
          />
          <p className={style.text}>Модельные тесты, минимализм</p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={img4} alt="Будуар/НЮ" />
          <p className={style.text}>Будуар/НЮ</p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={img5} alt="Предметная съемка" />
          <p className={style.text}>Предметная съемка</p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={img6} alt="Верстка и коллажи" />
          <p className={style.text}>Верстка и коллажи</p>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
