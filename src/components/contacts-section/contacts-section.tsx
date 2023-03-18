import { MouseEvent } from 'react';
import style from './contacts-section.module.css';
import Button from '../button/button';

function ContactsSection() {
  const submit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return console.log(submit);
  };

  return (
    <section className={style.section}>
      <h2>КОНТАКТЫ</h2>
      <div className={style.cont_flex}>
        <div className={style.cont_form}>
          <form className={style.form}>
            <input type="text" className={style.input} />
            <input
              type="tel"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              className={style.input}
            />
            <select value="vip" name="rate" className={style.select}>
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
              <Button onClick={submit} />
            </div>
          </form>
        </div>
        <div className={style.cont_img} />
      </div>
    </section>
  );
}

export default ContactsSection;
