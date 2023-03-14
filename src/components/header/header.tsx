import style from './header.module.css';

function Header() {
  return (
    <header className={style.cont}>
      <p className={style.text}>Обо мне</p>
      <p className={style.text}>Этапы работы</p>
      <p className={style.text}>Портфолио</p>
      <p className={style.text}>Тарифы</p>
      <p className={style.text}>Публикации</p>
      <p className={style.text}>Контакты</p>
    </header>
  );
}

export default Header;
