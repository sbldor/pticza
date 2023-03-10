import style from './button.module.css';

interface IButton {
  styles?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ styles = 'defualt', onClick }: IButton) {
  const className = styles === 'vip' ? style.button_vip : style.button;
  return (
    <button type="button" className={className} onClick={onClick}>
      <p className={style.text}>Записаться</p>
    </button>
  );
}

export default Button;

Button.defaultProps = {
  styles: 'defualt',
};
