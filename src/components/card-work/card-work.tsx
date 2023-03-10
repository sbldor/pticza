import style from './card-work.module.css';
// import Button from '../button/button';
// import img1 from '../../images/job1.jpg';
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

export default CardWork;
