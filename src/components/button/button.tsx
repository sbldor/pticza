import style from './button.module.css';

interface IButton {
  type?: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ type = 'defualt', onClick }: IButton) {
  const className = type === 'vip' ? style.button_vip : style.button
  return (
    <button className={className} onClick={onClick}>
      <p className={style.text}>Записаться</p>
    </button>
  );
}

export default Button;
