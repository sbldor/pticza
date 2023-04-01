/* eslint-disable jsx-a11y/label-has-associated-control */
import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import style from './contacts-section.module.css';
import Button from '../button/button';

function ContactsSection() {
  const [optionVal, setOptionVal] = useState<string>('Тариф');
  const [isOpen, setOpen] = useState<boolean>(false);
  const { register, watch, formState, setValue } = useForm();
  const { isValid } = formState;

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const name = watch('name');
    const tel = watch('telephone');
    const data = {
      Name: name,
      Telephone: tel,
      Rate: optionVal,
    };
    console.log(data);
    setValue('telephone', '');
    setValue('name', '');
    setOptionVal('Тариф');
  };

  const onToggle = () => {
    setOpen(!isOpen);
  };

  const handleClick = (val: string) => {
    setOptionVal(val);
    onToggle();
  };

  const isValidation = () => {
    if (!isValid || optionVal === 'Тариф') {
      return true;
    }
    return false;
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
                  value: '',
                  required: {
                    value: true,
                    message: 'Введите ваше имя',
                  },
                  minLength: {
                    value: 2,
                    message: 'Введите ваше имя',
                  },
                  maxLength: {
                    value: 45,
                    message: 'Введите ваше имя',
                  },
                })}
              />
            </label>
            <label htmlFor="telephone">
              <InputMask
                required
                className={style.input}
                id="telephone"
                type="tel"
                placeholder="Номер телефона"
                mask="+7-999-999-99-99"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('telephone', {
                  value: '',
                  required: {
                    value: true,
                    message: 'Введите ваш телефон',
                  },
                  pattern: {
                    value: /[^_]/,
                    message: 'Введите ваш телефон',
                  },
                  validate: (v) => !v.includes('_'),
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
              <Button
                disabled={isValidation()}
                type="submit"
                onClick={onSubmit}
                styles="vip"
              />
            </div>
          </form>
        </div>
        <div className={style.cont_img} />
      </div>
    </section>
  );
}

export default ContactsSection;
