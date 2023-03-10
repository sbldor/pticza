import style from './app.module.css';
import Header from '../header/header';
// import Button from '../button/button';
import CardWork from '../card-work/card-work';
import img1 from '../../images/job1.jpg';
import img2 from '../../images/job2.jpg';
import img3 from '../../images/job3.jpg';
import { Head, Texts } from '../card-work/utils';
import Info from '../info/info';

function App() {
  return (
    <div className="div">
      <Header />
      <Info />
      <div className={style.div_flex}>
        <CardWork img={img1} head={Head.head1} text={Texts.text1} />
        <CardWork img={img2} head={Head.head2} text={Texts.text2} />
        <CardWork img={img3} head={Head.head3} text={Texts.text3} />
      </div>
    </div>
  );
}

export default App;
