import style from './button.module.css';

interface IButton {
  styles?: string;
  type: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ styles = 'defualt', onClick, type, disabled }: IButton) {
  const className = styles === 'vip' ? style.button_vip : style.button;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={className}
      onClick={onClick}
    >
      <p className={style.text}>Записаться</p>
    </button>
  );
}

export default Button;

Button.defaultProps = {
  styles: 'defualt',
  disabled: false,
};
