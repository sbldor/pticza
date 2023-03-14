import style from './work-section.module.css';
// import CardWork from '../card-work/card-work';
import img1 from '../../images/job1.jpg';
import img2 from '../../images/job2.jpg';
import img3 from '../../images/job3.jpg';

import { Head, Texts } from './utils';

interface IcardWorc {
  img: string;
  head: Head;
  text: Texts;
}

function CardWork({ img, head, text }: IcardWorc) {
  return (
    <div className={style.card}>
      <img className={style.img} src={img} alt={head} />
      <h1 className={style.heading}>{head}</h1>
      <p className={style.text}>{text}</p>
    </div>
  );
}

function WorkSection() {
  return (
    <section className={style.section}>
      <h2 className={style.title}>этапы</h2>
      <p className={style.subtitle}>работы</p>
      <div className={style.cont_flex}>
        <CardWork img={img1} head={Head.head1} text={Texts.text1} />
        <CardWork img={img2} head={Head.head2} text={Texts.text2} />
        <CardWork img={img3} head={Head.head3} text={Texts.text3} />
      </div>
    </section>
  );
}

export default WorkSection;
