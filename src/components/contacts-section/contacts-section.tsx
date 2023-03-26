/* eslint-disable jsx-a11y/label-has-associated-control */
import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import style from './contacts-section.module.css';
import Button from '../button/button';

function ContactsSection() {
  const [optionVal, setOptionVal] = useState<string>('Тариф');
  const [isOpen, setOpen] = useState<boolean>(false);
  const { register, handleSubmit, watch, formState, reset } = useForm();

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const name = watch('name');
    const tel = watch('tel');
    console.log(name, tel);
    reset();
  };

  const onToggle = async () => {
    setOpen(!isOpen);
  };

  const handleClick = (val: string) => {
    setOptionVal(val);
    onToggle();
  };

  const styleSelect =
    optionVal === 'Тариф'
      ? `${style.select} ${style.select_def}`
      : style.select;

  const styleOptionList = isOpen
    ? style.cont_list
    : `${style.cont_list} ${style.cont_list_exit}`;

  const styleButtonList = isOpen
    ? style.button_list
    : `${style.button_list} ${style.button_list_exit}`;

  const styleRelativeList = isOpen ? style.relative_open : style.relative;

  return (
    <section className={style.section}>
      <h2 className={style.title}>КОНТАКТЫ</h2>
      <div className={style.cont_flex}>
        <div className={style.cont_form}>
          <p className={style.subtitle}>Хочешь съемку? Скорее бронируй!</p>
          <form className={style.form}>
            <label htmlFor="name">
              <input
                className={style.input}
                id="name"
                type="text"
                placeholder="Имя"
                required
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Введите ваше имя',
                  },
                  maxLength: {
                    value: 4,
                    message: 'Пожалуйста короче, я не выговорю)',
                  },
                })}
              />
            </label>
            <label htmlFor="tel">
              <InputMask
                required
                className={style.input}
                id="tel"
                placeholder="Номер телефона"
                mask="+7-999-999-99-99"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('tel', {
                  required: {
                    value: true,
                    message: 'Введите ваш телефон',
                  },
                  minLength: {
                    value: 16,
                    message: 'Введите ваш телефон',
                  },
                })}
              />
            </label>
            <button
              type="button"
              onClick={() => onToggle()}
              className={styleSelect}
            >
              {optionVal === 'Тариф' && <p>Тариф</p>}
              {optionVal !== 'Тариф' && <p>{optionVal}</p>}
            </button>

            <div className={styleRelativeList}>
              <div className={styleOptionList}>
                <button
                  className={styleButtonList}
                  type="button"
                  onClick={() => handleClick('LITE')}
                >
                  LITE
                </button>
                <button
                  className={styleButtonList}
                  type="button"
                  onClick={() => handleClick('STANDART')}
                >
                  STANDART
                </button>
                <button
                  className={styleButtonList}
                  type="button"
                  onClick={() => handleClick('VIP')}
                >
                  VIP
                </button>
              </div>
            </div>
            <div className={style.button}>
              <Button type="submit" onClick={onSubmit} styles="vip" />
            </div>
          </form>
        </div>
        <div className={style.cont_img} />
      </div>
    </section>
  );
}

export default ContactsSection;
