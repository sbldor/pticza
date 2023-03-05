import style from './button.module.css';

function Button() {
  return (
    <button className={style.button}>
      <p className={style.text}>Записаться</p>
    </button>
  );
}

export default Button;