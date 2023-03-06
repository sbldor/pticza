import style from './app.module.css';
import Header from '../header/header';
// import Button from '../button/button';
import CardWork from '../card-work/card-work';
import img1 from './../../images/job1.jpg';
import img2 from './../../images/job2.jpg';
import img3 from './../../images/job3.jpg';
import { head, texts } from '../card-work/utils';

function App() {
  return (
    <div className="div">
      <Header />
      <div className={style.div_flex}>
        <CardWork img={img1} head={head.head1} text={texts.text1} />
        <CardWork img={img2} head={head.head2} text={texts.text2} />
        <CardWork img={img3} head={head.head3} text={texts.text3} />
      </div>
    </div>
  );
}

export default App;
