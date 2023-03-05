import style from './app.module.css';
import Header from '../header/header';
import Button from '../button/button';

function App() {
  return (
    <div className="div">
      <Header />
      <div className={style.button_test}>
        <Button />
      </div>
    </div>
  );
}

export default App;
