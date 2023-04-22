import { useEffect, useState } from 'react';
import style from './header.module.css';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [close, setClose] = useState(false);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const styleSpanTop = close
    ? `${style.span} ${style.span_top} ${style.span_top_x}`
    : `${style.span} ${style.span_top}`;

  const styleSpanMidle = close
    ? `${style.span} ${style.span_midle} ${style.span_midle_x}`
    : `${style.span} ${style.span_midle}`;

  const styleSpanBottom = close
    ? `${style.span} ${style.span_bottom} ${style.span_bottom_x}`
    : `${style.span} ${style.span_bottom}`;

  const styleNav = close ? style.cont : `${style.cont} ${style.cont_open}`;

  const styleText = close ? style.text : `${style.text} ${style.text_close}`;

  return (
    <header className={style.header}>
      {width < 1001 && <h1 className={style.title}>SOPHIA PTITSA</h1>}
      {width < 1001 && (
        <button
          onClick={() => setClose(!close)}
          type="button"
          className={style.button}
        >
          <div className={styleSpanTop} />
          <div className={styleSpanMidle} />
          <div className={styleSpanBottom} />
        </button>
      )}
      <div className={styleNav}>
        <p className={styleText}>Обо мне</p>
        <p className={styleText}>Этапы работы</p>
        <p className={styleText}>Портфолио</p>
        <p className={styleText}>Тарифы</p>
        <p className={styleText}>Публикации</p>
        <p className={styleText}>Контакты</p>
      </div>
    </header>
  );
}

export default Header;
