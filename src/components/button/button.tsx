import style from './button.module.css';

interface IButton {
  styles?: string;
  type: 'submit' | 'button' | 'reset';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ styles = 'defualt', onClick, type }: IButton) {
  const className = styles === 'vip' ? style.button_vip : style.button;
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={className} onClick={onClick}>
      <p className={style.text}>Записаться</p>
    </button>
  );
}

export default Button;

Button.defaultProps = {
  styles: 'defualt',
};
