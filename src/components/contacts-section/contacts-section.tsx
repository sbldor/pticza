import { MouseEvent, useState } from 'react';
import style from './contacts-section.module.css';
import Button from '../button/button';

function ContactsSection() {
  const [optionVal, setOptionVal] = useState<string>('Тариф');

  const submit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return console.log(submit);
  };

  const handleChange = (e: { target: { value: string } }) => {
    setOptionVal(e.target.value);
    console.log(e.target.value);
  };

  const styleSelect =
    optionVal === 'Тариф'
      ? `${style.select} ${style.select_def}`
      : style.select;

  return (
    <section className={style.section}>
      <h2 className={style.title}>КОНТАКТЫ</h2>
      <div className={style.cont_flex}>
        <div className={style.cont_form}>
          <p className={style.subtitle}>Хочешь съемку? Скорее бронируй!</p>
          <form className={style.form}>
            <input type="text" placeholder="Имя" className={style.input} />
            <input
              type="tel"
              placeholder="Номер телефона"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              className={style.input}
            />
            <select
              value={optionVal}
              onChange={handleChange}
              name="rate"
              className={styleSelect}
            >
              {optionVal === 'Тариф' && (
                <option className={style.option} value="Тариф">
                  Тариф
                </option>
              )}
              <option className={style.option} value="lite">
                LITE
              </option>
              <option className={style.option} value="standart">
                STANDART
              </option>
              <option className={style.option} value="vip">
                VIP
              </option>
            </select>
            <div className={style.button}>
              <Button onClick={submit} styles="vip" />
            </div>
          </form>
        </div>
        <div className={style.cont_img} />
      </div>
    </section>
  );
}

export default ContactsSection;
