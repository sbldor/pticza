import style from '../portfolio-section/portfolio-section.module.css';
import img1 from '../../images/public1.jpg';
import img2 from '../../images/public2.jpg';
import img3 from '../../images/public3.jpg';
import img4 from '../../images/public4.jpg';
import img5 from '../../images/public5.jpg';
import img6 from '../../images/public6.jpg';
import img7 from '../../images/public7.jpg';
import img8 from '../../images/public8.jpg';
import img9 from '../../images/public9.jpg';

function PublicSection() {
  return (
    <section className={style.section}>
      <h2 className={style.title}>потфолио</h2>
      <div className={style.cont}>
        <div className={style.card}>
          <img
            className={style.img}
            src={img1}
            alt="SWANKY Magazine (Англия)"
          />
          <p className={style.text}>SWANKY Magazine (Англия)</p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={img2} alt="VOUS Magazine (Испания)" />
          <p className={style.text}>VOUS Magazine (Испания)</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={img3}
            alt="TEEN CRUZE Magazine (США)"
          />
          <p className={style.text}>TEEN CRUZE Magazine (США)</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={img4}
            alt=" EDIHT Magazine (Франция)"
          />
          <p className={style.text}>EDIHT Magazine (Франция)</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={img5}
            alt="VIGOUR Magazine (Канада)"
          />
          <p className={style.text}>VIGOUR Magazine (Канада)</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={img6}
            alt="STYLECRUZE Magazine (Англия)"
          />
          <p className={style.text}>STYLECRUZE Magazine (Англия)</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={img7}
            alt="SWANKY Magazine (Англия)"
          />
          <p className={style.text}>SWANKY Magazine (Англия)</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={img8}
            alt="MARIKA MEDIA Magazine (Италия)"
          />
          <p className={style.text}>MARIKA MEDIA Magazine (Италия)</p>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src={img9}
            alt="UnTold Magazine (Греция)"
          />
          <p className={style.text}>UnTold Magazine (Греция)</p>
        </div>
      </div>
    </section>
  );
}

export default PublicSection;
