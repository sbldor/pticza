import style from './card-work.module.css';
import Header from '../header/header';
// import Button from '../button/button';
import img1 from './../../images/job1.jpg';
import { head, texts } from './utils';

interface IcardWorc{
  img: string,
  head: head,
  text: texts,
}

function CardWork({ img, head, text }: IcardWorc) {
  return (
    <div className={style.card}>
      <img src={img} alt={head} />
      <h1 className={style.heading}>{head}</h1>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default CardWork;